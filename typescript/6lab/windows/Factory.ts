import {Control} from "../base/Control";
import {ControlFactory} from "../base/Factory";
import {WindowsButton, WindowsComboBox, WindowsForm, WindowsLabel, WindowsTextBox} from "./Elements";

export class WindowsControlFactory extends ControlFactory {
    createForm(): WindowsForm {
        return new WindowsForm();
    }

    createLabel(): Control {
        return new WindowsLabel();
    }

    createTextBox(): WindowsTextBox {
        return new WindowsTextBox();
    }

    createComboBox(): Control {
        return new WindowsComboBox();
    }

    createButton(): Control {
        return new WindowsButton();
    }
}