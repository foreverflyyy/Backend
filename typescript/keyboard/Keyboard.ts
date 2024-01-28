interface Keys {
    [key: string]: Key
}

export class Keyboard {
    private _keys: Keys = {};
    private pressedKeys: string[] = [];

    public get keys() {
        return this._keys;
    }

    public pressKey(key: string): void {
        const needKey = this._keys[key];
        if (needKey) {
            this.pressedKeys.push(key);
            needKey.action();
        } else
            console.log(`На кнопку ${key} не назначено никаких действий!`);
    }

    public addAction(key: string | string[], action: () => void, undoAction: () => void): void {
        if(Array.isArray(key))
            key = key.join('+');

        if(this.keys[key])
            return this.reassignKey(key, action, undoAction);

        this._keys[key] = new Key(key, action, undoAction);
    }

    public reassignKey(key: string, newAction: () => void, undoAction: () => void): void {
        const needKey = this._keys[key];
        if(!needKey) {
            console.log(`Такая клавиша ${key} не была объявлена ранее.`);
            return;
        }

        needKey.action = newAction;
        needKey.undoAction = undoAction;
    }

    public undoLastAction() {
        this.pressedKeys.pop()
        const lastPressedKey = this.pressedKeys.pop();
        if (!lastPressedKey) {
            console.log("Нечего возвращать");
            return;
        }

        this._keys[lastPressedKey ?? ""].undoAction();
    }
}

export class Key {
    private readonly name: string;
    private _action = () => {};
    private _undoAction = () => {};

    constructor(name: string, action: () => void, undoAction: () => void) {
        this.name = name;
        this.action = action;
        this.undoAction = undoAction;
    }

    public get action() {
        return this._action;
    }

    public set action(newAction: () => void) {
        this._action = newAction;
    }

    public get undoAction() {
        return this._undoAction;
    }

    public set undoAction(newUndoAction: () => void) {
        this._undoAction = newUndoAction;
    }
}
