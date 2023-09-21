using Derivative;

class Program
{
    static void Main()
    {
        // Создаем объекты родительского и унаследованного классов
        DerivativeCalculator derivativeCalculator = new DerivativeCalculator();

        // Пример использования методов для вычисления производных
        Func<double, double> function = x => x * x; // Пример функции x^2

        double x = 2.0;
        double h = 0.01;

        double rightDerivative = derivativeCalculator.CalculateRightDerivative(function, x, h);
        double leftDerivative = derivativeCalculator.CalculateLeftDerivative(function, x, h);
        double centralDerivative = derivativeCalculator.CalculateCentralDerivative(function, x, h);

        Console.WriteLine($"Right Derivative: {rightDerivative}");
        Console.WriteLine($"Left Derivative: {leftDerivative}");
        Console.WriteLine($"Central Derivative: {centralDerivative}");
    }
}