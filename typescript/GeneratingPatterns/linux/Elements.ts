import {Control} from "../base/Control";

export class LinuxForm extends Control {
    addControl(control: Control): void {
        console.log(`Вызван метод addControl у контролла LinuxForm`);
    }
}

export class LinuxLabel extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла LinuxLabel: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла LinuxLabel`);
    }
}

export class LinuxTextBox extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла LinuxTextBox: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла LinuxTextBox`);
    }

    onValueChanged(): void {
        console.log(`Вызван метод onValueChanged у контролла LinuxTextBox`);
    }
}

export class LinuxComboBox extends Control {
    setSelectedIndex(index: number): void {
        console.log(`Вызван метод setSelectedIndex у контролла LinuxComboBox: ${index}`);
    }

    getSelectedIndex(): void {
        console.log(`Вызван метод getSelectedIndex у контролла LinuxComboBox`);
    }

    setItems(items: string[]): void {
        console.log(`Вызван метод setItems у контролла LinuxComboBox: ${items}`);
    }

    getItems(): void {
        console.log(`Вызван метод getItems у контролла LinuxComboBox`);
    }
}

export class LinuxButton extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла LinuxButton: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла LinuxButton`);
    }

    click(): void {
        console.log(`Вызван метод click у контролла LinuxButton`);
    }
}