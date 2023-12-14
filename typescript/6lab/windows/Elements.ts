import {Control} from "../base/Control";

export class WindowsForm extends Control {
    addControl(control: Control): void {
        console.log(`Вызван метод addControl у контролла WindowsForm`);
    }
}

export class WindowsLabel extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла WindowsLabel: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла WindowsLabel`);
    }
}

export class WindowsTextBox extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла WindowsTextBox: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла WindowsTextBox`);
    }

    onValueChanged(): void {
        console.log(`Вызван метод onValueChanged у контролла WindowsTextBox`);
    }
}

export class WindowsComboBox extends Control {
    setSelectedIndex(index: number): void {
        console.log(`Вызван метод setSelectedIndex у контролла WindowsComboBox: ${index}`);
    }

    getSelectedIndex(): void {
        console.log(`Вызван метод getSelectedIndex у контролла WindowsComboBox`);
    }

    setItems(items: string[]): void {
        console.log(`Вызван метод setItems у контролла WindowsComboBox: ${items}`);
    }

    getItems(): void {
        console.log(`Вызван метод getItems у контролла WindowsComboBox`);
    }
}

export class WindowsButton extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла WindowsButton: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла WindowsButton`);
    }

    click(): void {
        console.log(`Вызван метод click у контролла WindowsButton`);
    }
}