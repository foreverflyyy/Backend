namespace Ratio
{
    public class RatioCalc : RatioBase
    {
        public RatioCalc(int numerator, int denominator) : base(numerator, denominator) { }

        /// <summary>
        /// Переопределение оператора сложения
        /// </summary>
        /// <param name="frac1"></param>
        /// <param name="frac2"></param>
        /// <returns></returns>
        public static RatioCalc operator +(RatioCalc frac1, RatioCalc frac2)
        {
            int newNumerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
            int newDenominator = frac1.denominator * frac2.denominator;
            return new RatioCalc(newNumerator, newDenominator);
        }

        /// <summary>
        /// Переопределение оператора вычитания
        /// </summary>
        /// <param name="frac1"></param>
        /// <param name="frac2"></param>
        /// <returns></returns>
        public static RatioCalc operator -(RatioCalc frac1, RatioCalc frac2)
        {
            int newNumerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
            int newDenominator = frac1.denominator * frac2.denominator;
            return new RatioCalc(newNumerator, newDenominator);
        }

        /// <summary>
        /// Переопределение оператора умножения
        /// </summary>
        /// <param name="frac1"></param>
        /// <param name="frac2"></param>
        /// <returns></returns>
        public static RatioCalc operator *(RatioCalc frac1, RatioCalc frac2)
        {
            int newNumerator = frac1.numerator * frac2.numerator;
            int newDenominator = frac1.denominator * frac2.denominator;
            return new RatioCalc(newNumerator, newDenominator);
        }

        /// <summary>
        /// Переопределение оператора деления
        /// </summary>
        /// <param name="frac1"></param>
        /// <param name="frac2"></param>
        /// <returns></returns>
        /// <exception cref="DivideByZeroException"></exception>
        public static RatioCalc operator /(RatioCalc frac1, RatioCalc frac2)
        {
            if (frac2.numerator == 0)
            {
                throw new DivideByZeroException("Деление на ноль.");
            }

            int newNumerator = frac1.numerator * frac2.denominator;
            int newDenominator = frac1.denominator * frac2.numerator;
            return new RatioCalc(newNumerator, newDenominator);
        }
    }
}
