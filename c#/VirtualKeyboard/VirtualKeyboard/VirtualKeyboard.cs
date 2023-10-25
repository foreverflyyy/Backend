using System;
using System.Collections.Generic;
using System.Threading;

namespace VirtualKeyboard
{
    public class VirtualKeyboard
    {
        private Dictionary<ConsoleKey, Action> keyActions = new Dictionary<ConsoleKey, Action>();
        private List<Action> workflow = new List<Action>();

        public void AddKeyAction(ConsoleKey key, Action action)
        {
            keyActions[key] = action;
        }

        public void ExecuteWorkflow()
        {
            foreach (var action in workflow)
            {
                action.Invoke();
                Thread.Sleep(1000); // Задержка между действиями (1 секунда)
            }
        }

        public void AddActionToWorkflow(Action action)
        {
            workflow.Add(action);
        }

        public void UndoLastAction()
        {
            if (workflow.Count > 0)
                workflow.RemoveAt(workflow.Count - 1);
        }

        public void DisplayKeyActions()
        {
            Console.WriteLine("Key Actions:");
            foreach (var keyAction in keyActions)
            {
                Console.WriteLine($"{keyAction.Key}: {keyAction.Value.Method.Name}");
            }
        }
    }
}
