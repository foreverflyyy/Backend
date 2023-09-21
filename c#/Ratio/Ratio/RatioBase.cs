namespace Ratio
{
    public class RatioBase
    {
        protected int numerator;   // числитель
        protected int denominator; // знаменатель

        public RatioBase(int numerator, int denominator)
        {
            if (denominator == 0) 
                throw new ArgumentException("Знаменатель не может быть равен нулю.");

            this.numerator = numerator;
            this.denominator = denominator;
        }

        /// <summary>
        /// Метод для нахождения НОД (наибольшего общего делителя) двух чисел
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        protected int FindGCD(int a, int b)
        {
            while (b != 0)
            {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        /// <summary>
        /// Метод для сокращения дроби
        /// </summary>
        protected void Reduce()
        {
            int gcd = FindGCD(numerator, denominator);
            numerator /= gcd;
            denominator /= gcd;
        }

        /// <summary>
        /// Метод для нахождения обратной дроби
        /// </summary>
        /// <returns></returns>
        /// <exception cref="InvalidOperationException"></exception>
        public RatioBase GetReciprocal()
        {
            if (numerator == 0)
                throw new InvalidOperationException("Обратной дроби не существует.");

            return new RatioBase(denominator, numerator);
        }

        /// <summary>
        /// Метод для преобразования дроби в рациональное число
        /// </summary>
        /// <returns></returns>
        public double ToDecimal()
        {
            return (double)numerator / denominator;
        }

        public override string ToString()
        {
            return $"{numerator}/{denominator}";
        }
    }
}
