namespace Integration
{
    public abstract class BaseIntegration
    {
        protected double lowerBound;
        protected double upperBound;
        protected int numberOfPoints;
        protected double step;

        public BaseIntegration(double lowerBound, double upperBound, int numberOfPoints)
        {
            this.lowerBound = lowerBound;
            this.upperBound = upperBound;
            this.numberOfPoints = numberOfPoints;
            this.step = (upperBound - lowerBound) / numberOfPoints;
        }

        public abstract double Calc(Func<double, double> function);

        protected double CalculateFunctionSum(Func<double, double> function)
        {
            double sum = 0;
            double x = lowerBound;

            for (int i = 0; i <= numberOfPoints; i++)
            {
                sum += function(x);
                x += step;
            }

            return sum;
        }
    }
}
