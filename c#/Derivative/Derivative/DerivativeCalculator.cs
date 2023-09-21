namespace Derivative
{
    public class DerivativeCalculator : BaseDerivative
    {
        public override double CalculateRightDerivative(Func<double, double> function, double x, double h)
        {
            return (function(x + h) - function(x)) / h;
        }

        public override double CalculateLeftDerivative(Func<double, double> function, double x, double h)
        {
            return (function(x) - function(x - h)) / h;
        }

        public override double CalculateCentralDerivative(Func<double, double> function, double x, double h)
        {
            return (function(x + h) - function(x - h)) / (2 * h);
        }
    }
}
