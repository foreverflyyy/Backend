import {Control} from "../base/Control";
import {ControlFactory} from "../base/Factory";
import {LinuxButton, LinuxComboBox, LinuxForm, LinuxLabel, LinuxTextBox} from "./Elements";

export class LinuxControlFactory extends ControlFactory {
    createForm(): LinuxForm {
        return new LinuxForm();
    }

    createLabel(): Control {
        return new LinuxLabel();
    }

    createTextBox(): LinuxTextBox {
        return new LinuxTextBox();
    }

    createComboBox(): Control {
        return new LinuxComboBox();
    }

    createButton(): Control {
        return new LinuxButton();
    }
}