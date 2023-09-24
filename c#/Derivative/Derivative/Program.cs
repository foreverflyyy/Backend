using Derivative;

class Program
{
    static void Main()
    {
        // Пример функции x^2
        Func<double, double> function = x => x * x;

        // Используется для приближенного вычисления производных в определенной точке функции
        double h = 0.01; 
        double x = 4.0;

        DerivativeCalculator derivativeCalculator = new DerivativeCalculator();

        double rightDerivative = derivativeCalculator.CalculateRightDerivative(function, x, h);
        double leftDerivative = derivativeCalculator.CalculateLeftDerivative(function, x, h);
        double centralDerivative = derivativeCalculator.CalculateCentralDerivative(function, x, h);

        Console.WriteLine($"Right Derivative: {rightDerivative}");
        Console.WriteLine($"Left Derivative: {leftDerivative}");
        Console.WriteLine($"Central Derivative: {centralDerivative}");
    }
}

/*Симметрия функции: Если функция, для которой вы вычисляете производные, симметрична относительно 
точки x, то правая и левая производные могут быть близкими по значению. Например, для функции 
f(x) = x ^ 2, производные в точке x и -x будут иметь одинаковые значения.*/

/*Малый шаг h: Если вы выбрали очень маленькое значение h, то разница между правой и левой производными 
становится невеликой, так как h представляет собой малое приращение аргумента функции, и разница 
между x + h и x - h становится незначительной. При таком маленьком h и правая, и левая производные 
приближают мгновенную скорость изменения функции в точке x с высокой точностью.*/