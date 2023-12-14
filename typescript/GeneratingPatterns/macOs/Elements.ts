import {Control} from "../base/Control";

export class MacOsForm extends Control {
    addControl(control: Control): void {
        console.log(`Вызван метод addControl у контролла MacOsForm`);
    }
}

export class MacOsLabel extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла MacOsLabel: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла MacOsLabel`);
    }
}

export class MacOsTextBox extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла MacOsTextBox: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла MacOsTextBox`);
    }

    onValueChanged(): void {
        console.log(`Вызван метод onValueChanged у контролла MacOsTextBox`);
    }
}

export class MacOsComboBox extends Control {
    setSelectedIndex(index: number): void {
        console.log(`Вызван метод setSelectedIndex у контролла MacOsComboBox: ${index}`);
    }

    getSelectedIndex(): void {
        console.log(`Вызван метод getSelectedIndex у контролла MacOsComboBox`);
    }

    setItems(items: string[]): void {
        console.log(`Вызван метод setItems у контролла MacOsComboBox: ${items}`);
    }

    getItems(): void {
        console.log(`Вызван метод getItems у контролла MacOsComboBox`);
    }
}

export class MacOsButton extends Control {
    setText(text: string): void {
        console.log(`Вызван метод setText у контролла MacOsButton: '${text}'`);
    }

    getText(): void {
        console.log(`Вызван метод getText у контролла MacOsButton`);
    }

    click(): void {
        console.log(`Вызван метод click у контролла MacOsButton`);
    }
}