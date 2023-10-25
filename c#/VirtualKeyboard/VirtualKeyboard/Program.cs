using System;

/*1) Создать виртуальную клавиатуру с переназначаемыми действиями для клавиш и комбинаций клавиш,
    с возможностью отката действий назад.
2) Продемонстрировать работу клавиатуры сделал Workflow из нажатий различных комбинаций клавиш
    и откатов назад. Симулировать демонстрацию нажатий клавиш путем вывода значения в консоль и 
    задержкой между нажатиями
3) Продемонстрировать переназначение клавиши и комбинации клавиш с перезапуком Workflow*/

namespace VirtualKeyboard
{
    class Program
    {
        static void Main(string[] args)
        {
            VirtualKeyboard virtualKeyboard = new VirtualKeyboard();

            virtualKeyboard.AddKeyAction(ConsoleKey.A, () => Console.WriteLine("Key A Pressed"));
            virtualKeyboard.AddKeyAction(ConsoleKey.B, () => Console.WriteLine("Key B Pressed"));

            virtualKeyboard.DisplayKeyActions();

            virtualKeyboard.AddActionToWorkflow(() => virtualKeyboard.ExecuteKeyAction(ConsoleKey.A));
            virtualKeyboard.AddActionToWorkflow(() => virtualKeyboard.ExecuteKeyAction(ConsoleKey.B));
            virtualKeyboard.AddActionToWorkflow(() => Console.WriteLine("Custom Action"));

            Console.WriteLine("Executing Workflow:");
            virtualKeyboard.ExecuteWorkflow();

            Console.WriteLine("Undo Last Action:");
            virtualKeyboard.UndoLastAction();
            virtualKeyboard.ExecuteWorkflow();
        }
    }
}
