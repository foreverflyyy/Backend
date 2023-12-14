import {Control} from "./Control";

export abstract class ControlFactory {
    abstract createForm(): Control;
    abstract createLabel(): Control;
    abstract createTextBox(): Control;
    abstract createComboBox(): Control;
    abstract createButton(): Control;
}