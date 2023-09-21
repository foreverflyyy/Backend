namespace Integration
{
    public class TrapezoidalIntegration : BaseIntegration
    {
        public TrapezoidalIntegration(double lowerBound, double upperBound, int numberOfPoints)
            : base(lowerBound, upperBound, numberOfPoints)
        {
        }

        public override double Calc(Func<double, double> function)
        {
            double sum = (CalculateFunctionSum(function) - (function(lowerBound) + function(upperBound)) / 2) * step;
            return sum;
        }
    }
}
