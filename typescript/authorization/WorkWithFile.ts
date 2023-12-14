import {appendFile, readFileSync} from "fs";
import {User} from "./User";

export class WorkWithFile {
    public static readCSVSync = (filePath: string) => {
        try {
            const result: User[] = [];
            const fileContent = readFileSync(filePath, 'utf-8');
            const rows = fileContent.split('\n');

            for (const row of rows) {
                const parts = row.split(",");
                result.push(new User(parts[0], parts[1]));
            }

            return result;
        } catch (error) {
            console.error('Ошибка чтения файла:', error);
            return [];
        }
    }

    public static writeToFile = (pathToFile: string, data: string) => {
        appendFile(pathToFile, data, 'utf8', function (err: any) {
            if (err)
                console.log("Ошибка.");
            else
                console.log("Успешная запись");
        });
    }
}