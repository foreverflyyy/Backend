/*
    Авторизация и регистрация пользователя, данные о пользователях хранит и
    записывает в csv файл, с возможностью запоминания авторизованного пользователя
*/
import {WorkWithFile} from "./WorkWithFile";
import {User} from "./User";

class Authenticator {
    private users: User[] = [];
    private loggedInUser: User | null = null;
    private readonly csvFilePath: string;

    constructor(csvFilePath: string) {
        this.csvFilePath = csvFilePath;
        this.loadUsers();
    }

    loadUsers() {
        try {
            this.users = WorkWithFile.readCSVSync(this.csvFilePath);
        } catch (error) {
            this.users = [];
        }
    }

    register (login: string, password: string) {
        const existingUser = this.users.find((user) => user.login === login);
        if (existingUser) {
            console.log('Пользователь с таким логином уже существует.');
        } else {
            const newUser = new User(login, password);
            this.users.push(newUser);
            WorkWithFile.writeToFile(this.csvFilePath, `\n${login},${password}`);
            console.log('Регистрация пользователя успешна.');
        }
    }

    login(login: string, password: string): void {
        const user = this.users.find((u) => u.login === login && u.password === password);

        if (user) {
            this.loggedInUser = user;
            console.log('Успешный логин.');
        } else {
            console.log('Неверный логин или пароль.');
        }
    }

    logout(): void {
        this.loggedInUser = null;
        console.log('Logout.');
    }

    isLoggedIn(): boolean {
        return this.loggedInUser !== null;
    }

    getCurrentUser(): User | null {
        return this.loggedInUser;
    }
}

const authenticator = new Authenticator('data.csv');

authenticator.register('john_doe', 'secure_password');
authenticator.login('john_doe', 'secure_password');

if (authenticator.isLoggedIn()) {
    const currentUser = authenticator.getCurrentUser();
    console.log(`Текущий пользователь: ${currentUser?.login}`);
} else
    console.log('Пользователь не залогинен.');

authenticator.logout();