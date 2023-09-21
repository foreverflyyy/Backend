using Integration;

class Program
{
    static void Main(string[] args)
    {
        double lowerBound = 0;
        double upperBound = 1;
        int numberOfPoints = 1000;

        Func<double, double> function = x => Math.Sin(x);

        BaseIntegration trapezoidal = new TrapezoidalIntegration(lowerBound, upperBound, numberOfPoints);
        BaseIntegration simpson = new SimpsonIntegration(lowerBound, upperBound, numberOfPoints);

        double resultTrapezoidal = trapezoidal.Calc(function);
        double resultSimpson = simpson.Calc(function);

        Console.WriteLine($"Trapezoidal Integration Result: {resultTrapezoidal}");
        Console.WriteLine($"Simpson Integration Result: {resultSimpson}");
    }
}