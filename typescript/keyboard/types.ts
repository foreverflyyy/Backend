export abstract class State {
    abstract commands: {};

    abstract _eventHandler(name: string): void;
    abstract rebind_command(name: string, action: Function): void;
};

export interface HistoryAction {
    key: string;
    state: State;
};