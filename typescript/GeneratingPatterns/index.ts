import {WindowsControlFactory} from "./windows/Factory";

/* Задание. Порождающие паттерны.
Создать симуляцию крокссплатформенного приложения при
паттерна «абстрактная фабрика». Фабрика должна генерировать набор.
контроллов для различных операционных систем (Windows, Linux, MacOS).

Все контроллы наследуются от базового класса
Control (setPosition, getPosition).
Примеры реализующихся контроллов и их возможных методов

Form (addControl)
Label (setText, getText)
TextВох (setText, getText, OnValueChanged)
ComboВох (getSeleccedIndex, setSeleccedIndex,setItems,getItems)
Button (setText, getText, Click)

Приложение должно в зависимости от выбранной операционной снстемы
создавать свой набор контроллов, размещать их на форме, делать с ними
манипуляции (вызывать их методы).

Графический интерфейс создавать не требуется! Контроллы в реальности на
все методы просто пишут информацию о вызове метода в консоль по типу:
    «Вызван метод ______ у контролла _____»'
*/

const windowsFactory = new WindowsControlFactory();

const windowsForm = windowsFactory.createForm();
windowsForm.setPosition(10, 10);
windowsForm.addControl(windowsFactory.createLabel());

const windowsTextBox = windowsFactory.createTextBox();
windowsTextBox.setPosition(20, 20);
windowsTextBox.setText("Введенный текст:");
windowsTextBox.onValueChanged();