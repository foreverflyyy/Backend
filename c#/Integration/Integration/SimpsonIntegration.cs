namespace Integration
{
    public class SimpsonIntegration : BaseIntegration
    {
        public SimpsonIntegration(double lowerBound, double upperBound, int numberOfPoints)
            : base(lowerBound, upperBound, numberOfPoints)
        {
        }

        public override double Calc(Func<double, double> function)
        {
            double sum = 0;
            double x = lowerBound;

            for (int i = 0; i <= numberOfPoints; i++)
            {
                if (i == 0 || i == numberOfPoints)
                    sum += function(x);
                else if (i % 2 == 1)
                    sum += 4 * function(x);
                else
                    sum += 2 * function(x);

                x += step;
            }

            sum *= step / 3;
            return sum;
        }
    }
}
