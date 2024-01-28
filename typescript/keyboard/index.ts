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
import {Keyboard} from "./Keyboard";

class Main extends EventEmitter {
    public keyboard = new Keyboard();
    private pressedKeys: Set<string> = new Set();

    constructor() {
        super();
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (_, key) => this.handleKeyPress(key));
    }

    private handleKeyPress(key: {sequence: string, name: string, ctrl: boolean, shift: boolean}): void {
        let keyName = key.name ?? key.sequence;

        if (keyName === 'escape' || keyName === 'q') {
            console.log('Выход...');
            process.exit();
        }

        // Проверяют вдруг у нас комбинации
        const pressedCombinations = Object.keys(this.keyboard.keys).filter(combination =>
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
                this.keyboard.pressKey(combinationKey.substring(0, resultCombination.length - 1));
                this.pressedKeys.clear();
            }
        }, 300)
    }

    public demonstrateWorkflow(keys: string[], delay: number): void {
        for (const key of keys) {
            setTimeout(() => {
                this.keyboard.pressKey(key);
            }, delay);
            delay += 100;
        }
    }

    public declareKey(key: string | string[], action: () => void, undoAction: () => void) {
        this.keyboard.addAction(key, action, undoAction);
    }

    public assignUndoAction() {
        return this.keyboard.undoLastAction.bind(this.keyboard);
    }
}


const main = new Main();
main.declareKey(['z', 'ctrl'], main.assignUndoAction.bind(main)(), () => {});
main.declareKey('a', () => console.log('Действие по кнопке a'), () => console.log('Отмена действия по кнопке a'));
main.declareKey('b', () => console.log('Действие по кнопке b'), () => console.log('Отмена действия по кнопке b'));
main.declareKey(['c', 'ctrl'], () => console.log('Действие по комбинации c + ctrl'), () => console.log('Отмена действия по комбинации c + ctrl'));

main.demonstrateWorkflow(['a', 'b', 'c+ctrl'], 500);

setTimeout(() => {
    main.declareKey('a', () => console.log('Новое действие a'), () => console.log('Отмена нового действия a'));
    main.demonstrateWorkflow(['a', 'z+ctrl', 'z+ctrl', 'a', 'b', 'c'], 1000);
}, 1000);