/*
    1) Создать виртуальную клавиатуру с переназначаемыми действиями для клавиш и комбинаций клавиш,
    с возможностью отката действий назад.
    2) Продемонстрировать работу клавиатуры сделал Workflow из нажатий различных комбинаций клавиш
    и откатов назад. Симулировать демонстрацию нажатий клавиш путем вывода значения в консоль и
    задержкой между нажатиями
    3) Продемонстрировать переназначение клавиши и комбинации клавиш с перезапуком Workflow
*/

import * as readline from 'readline';
import { EventEmitter } from 'events';

interface Actions {
    [key: string]: () => void
}

class Keyboard extends EventEmitter {
    public actions: Actions = {};
    private actionsForCancel: any[] = [];
    private pressedKeys: Set<string> = new Set();

    constructor() {
        super();
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (_, key) => this.handleKeyPress(key));
    }

    addAction(key: string, action: () => void): void {
        this.actions[key] = action;
        this.actionsForCancel.push(() => delete this.actions[key]);
    }

    addCombinationAction(keys: string[], action: () => void): void {
        const combination = keys.join('+');
        this.actions[combination] = action;
        this.actionsForCancel.push(() => delete this.actions[combination]);
    }

    pressKey(key: string, isUndoAction = false): void {
        if (!isUndoAction) {
            this.actionsForCancel.push(() => {
                this.pressKey(key, true)
            });
        }

        const action = this.actions[key];
        if (action) {
            action();
        } else
            console.log(`На кнопку ${key} не назначено никаких действий!`);
    }

    undo(): void {
        const lastAction = this.actionsForCancel.pop();
        if (lastAction) {
            lastAction();
        } else
            console.log('Нечего возвращать');
    }

    reassignKey(key: string, newAction: () => void): void {
        const oldAction = this.actions[key];
        this.actionsForCancel.push(() => this.actions[key] = oldAction);

        delete this.actions[key];
        this.actions[key] = newAction;
    }

    private handleKeyPress(key: {sequence: string, name: string, ctrl: boolean, shift: boolean}): void {
        let keyName = key.name ?? key.sequence;

        if (keyName === 'escape' || keyName === 'q') {
            console.log('Выход...');
            process.exit();
        }

        // Проверяют вдруг у нас комбинации
        const pressedCombinations = Object.keys(this.actions).filter(combination =>
            combination.split('+').every(k => this.pressedKeys.has(k))
        );

        let combinationKey = keyName;
        if (pressedCombinations.length > 0)
            combinationKey += `+${pressedCombinations[0]}`;

        if (key.shift)
            combinationKey += "+shift";
        if (key.ctrl)
            combinationKey += "+ctrl";

        this.pressedKeys.add(combinationKey);
        const countPressedKey = this.pressedKeys.size;

        setTimeout(() => {
            if(countPressedKey === this.pressedKeys.size) {
                let resultCombination = "";
                for (const key of this.pressedKeys) {
                    resultCombination += `${key}+`
                }
                this.pressKey(combinationKey.substring(0, resultCombination.length - 1));
                this.pressedKeys.clear();
            }
        }, 300)
    }

    demonstrateWorkflow(keys: string[], delay: number): void {
        for (const key of keys) {
            setTimeout(() => {
                this.pressKey(key);
            }, delay);
            delay += 100;
        }
    }
}

const keyboard = new Keyboard();
keyboard.addCombinationAction(['z', 'ctrl'], () => keyboard.undo());
keyboard.addAction('a', () => console.log('Действие по кнопке a'));
keyboard.addAction('b', () => console.log('Действие по кнопке b'));

keyboard.addCombinationAction(['c', 'ctrl'], () => console.log('Действие по комбинации c + ctrl'));
keyboard.demonstrateWorkflow(['a', 'b', 'c+ctrl'], 500);

setTimeout(() => {
    keyboard.reassignKey('a', () => console.log('Новое действие a'));
    keyboard.demonstrateWorkflow(['a', 'z+ctrl', 'z+ctrl', 'a', 'b', 'c'], 1000);
}, 1000);
