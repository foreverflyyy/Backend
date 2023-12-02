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
    private workflow: string[] = [];
    private pressedKeys: Set<string> = new Set();

    constructor() {
        super();
        readline.emitKeypressEvents(process.stdin); // Позволяет использовать события клавиш в Node.js
        process.stdin.setRawMode(true); // В этом режиме данные с клавиатуры передаются в программу непосредственно, без буферизации
        process.stdin.on('keypress', (_, key) => this.handleKeyPress(key)); // Код устанавливает обработчик событий при каждом нажатии клавиши
    }

    addAction(key: string, action: () => void): void {
        this.actions[key] = action;
    }

    addCombinationAction(keys: string[], action: () => void): void {
        const combination = keys.join('+');
        this.actions[combination] = action;
    }

    pressKey(key: string): void {
        const action = this.actions[key];
        if (action) {
            action();
            this.workflow.push(key);
        } else
            console.log(`На кнопку ${key} не назначено никаких действий!`);
    }

    undo(): void {
        const lastKey = this.workflow.pop();
        if (lastKey) {
            const undoAction = this.actions[lastKey];
            if (undoAction) undoAction();
        } else
            console.log('Нечего возвращать');
    }

    reassignKey(key: string, newAction: () => void): void {
        const oldAction = this.actions[key];
        if (oldAction !== undefined) {
            delete this.actions[key];
            this.actions[key] = newAction;
        } else {
            console.log(`Нет действия на ${key}`);
        }
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
        this.pressKey(combinationKey)
    }

    demonstrateWorkflow(keys: string[], delay: number): void {
        for (const key of keys) {
            setTimeout(() => {
                this.pressKey(key);
            }, delay);
            delay += 300;
        }
    }
}

const keyboard = new Keyboard();
keyboard.addAction('a', () => console.log('Действие по кнопке a'));
keyboard.addAction('b', () => console.log('Действие по кнопке b'));

keyboard.addCombinationAction(['c', 'ctrl'], () => console.log('Действие по комбинации c + ctrl'));
keyboard.addCombinationAction(['z', 'ctrl'], () => keyboard.undo());
keyboard.demonstrateWorkflow(['a', 'b', 'c+ctrl'], 1000);

setTimeout(() => {
    keyboard.undo();
}, 5000);

setTimeout(() => {
    keyboard.reassignKey('a', () => console.log('Новое действие a'));
    keyboard.demonstrateWorkflow(['a', 'b', 'c'], 1000);
}, 7000);
