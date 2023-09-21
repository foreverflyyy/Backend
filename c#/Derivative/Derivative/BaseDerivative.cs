namespace Derivative
{
    public abstract class BaseDerivative
    {
        public abstract double CalculateRightDerivative(Func<double, double> function, double x, double h = 1e-5);

        public abstract double CalculateLeftDerivative(Func<double, double> function, double x, double h = 1e-5);

        public abstract double CalculateCentralDerivative(Func<double, double> function, double x, double h = 1e-5);
    }
}
