import {Control} from "../base/Control";
import {ControlFactory} from "../base/Factory";
import {MacOsButton, MacOsComboBox, MacOsForm, MacOsLabel, MacOsTextBox} from "./Elements";

export class MacOsControlFactory extends ControlFactory {
    createForm(): MacOsForm {
        return new MacOsForm();
    }

    createLabel(): Control {
        return new MacOsLabel();
    }

    createTextBox(): MacOsTextBox {
        return new MacOsTextBox();
    }

    createComboBox(): Control {
        return new MacOsComboBox();
    }

    createButton(): Control {
        return new MacOsButton();
    }
}