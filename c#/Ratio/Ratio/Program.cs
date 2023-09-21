namespace Ratio {
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.Unicode;
            Console.InputEncoding = System.Text.Encoding.Unicode;

            try
            {
                Console.WriteLine("Введите первую дробь (в формате 'числитель/знаменатель'):");
                string input1 = Console.ReadLine();
                string[] parts1 = input1.Split('/');
                int numerator1 = int.Parse(parts1[0]);
                int denominator1 = int.Parse(parts1[1]);
                RatioCalc frac1 = new RatioCalc(numerator1, denominator1);

                Console.WriteLine("Введите вторую дробь (в формате 'числитель/знаменатель'):");
                string input2 = Console.ReadLine();
                string[] parts2 = input2.Split('/');
                int numerator2 = int.Parse(parts2[0]);
                int denominator2 = int.Parse(parts2[1]);
                RatioCalc frac2 = new RatioCalc(numerator2, denominator2);

                Console.WriteLine("Выберите операцию:");
                Console.WriteLine("1. Сложение");
                Console.WriteLine("2. Вычитание");
                Console.WriteLine("3. Умножение");
                Console.WriteLine("4. Деление");
                Console.WriteLine("5. Нахождение обратной дроби");
                Console.WriteLine("6. Преобразование в десятичное представление");

                int choice = int.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        Console.WriteLine($"Результат: {frac1 + frac2}");
                        break;
                    case 2:
                        Console.WriteLine($"Результат: {frac1 - frac2}");
                        break;
                    case 3:
                        Console.WriteLine($"Результат: {frac1 * frac2}");
                        break;
                    case 4:
                        Console.WriteLine($"Результат: {frac1 / frac2}");
                        break;
                    case 5:
                        Console.WriteLine($"Обратная дробь для первой дроби: {frac1.GetReciprocal()}");
                        Console.WriteLine($"Обратная дробь для второй дроби: {frac2.GetReciprocal()}");
                        break;
                    case 6:
                        Console.WriteLine($"Десятичное представление первой дроби: {frac1.ToDecimal()}");
                        Console.WriteLine($"Десятичное представление второй дроби: {frac2.ToDecimal()}");
                        break;
                    default:
                        Console.WriteLine("Неверный выбор операции.");
                        break;
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Неверный формат ввода.");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}