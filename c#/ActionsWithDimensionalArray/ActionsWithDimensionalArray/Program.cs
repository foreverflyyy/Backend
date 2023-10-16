namespace ActionsWithDimensionalArray
{
    class Program
    {
        static void Main()
        {
            // Создаем трехмерный массив
            Array3d<int> array = new Array3d<int>(3, 3, 3);

            // Заполняем массив значениями
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    for (int k = 0; k < 3; k++)
                    {
                        array[i, j, k] = i * 100 + j * 10 + k;
                    }
                }
            }

            // Получаем и выводим значения
            Console.WriteLine("Array values:");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    for (int k = 0; k < 3; k++)
                    {
                        Console.WriteLine($"array[{i},{j},{k}] = {array[i, j, k]}");
                    }
                }
            }

            // Получаем и выводим значения по измерению 0 (фиксированный i)
            int[] values0 = array.GetValues0(1);
            Console.WriteLine("Values along dimension 0 (i=1): " + string.Join(", ", values0));

            // Получаем и выводим значения по измерению 1 (фиксированный j)
            int[] values1 = array.GetValues1(2);
            Console.WriteLine("Values along dimension 1 (j=2): " + string.Join(", ", values1));

            // Получаем и выводим значения по измерению 2 (фиксированный k)
            int[] values2 = array.GetValues2(0);
            Console.WriteLine("Values along dimension 2 (k=0): " + string.Join(", ", values2));
        }
    }
}