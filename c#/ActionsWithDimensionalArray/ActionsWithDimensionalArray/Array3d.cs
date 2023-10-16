using System;

namespace ActionsWithDimensionalArray
{
    public class Array3d<T>
    {
        private T[] data;
        private int dim0, dim1, dim2;

        public Array3d(int dim0, int dim1, int dim2)
        {
            if (dim0 <= 0 || dim1 <= 0 || dim2 <= 0)
                throw new ArgumentException("Dimensions must be greater than zero.");

            this.dim0 = dim0;
            this.dim1 = dim1;
            this.dim2 = dim2;
            this.data = new T[dim0 * dim1 * dim2];
        }

        /// <summary>
        /// Индексатор для получения и присваивания значения
        /// </summary>
        /// <param name="i"></param>
        /// <param name="j"></param>
        /// <param name="k"></param>
        /// <returns></returns>
        /// <exception cref="IndexOutOfRangeException"></exception>
        public T this[int i, int j, int k]
        {
            get
            {
                if (i < 0 || i >= dim0 || j < 0 || j >= dim1 || k < 0 || k >= dim2)
                    throw new IndexOutOfRangeException("Index is out of range.");

                return data[i * (dim1 * dim2) + j * dim2 + k];
            }
            set
            {
                if (i < 0 || i >= dim0 || j < 0 || j >= dim1 || k < 0 || k >= dim2)
                    throw new IndexOutOfRangeException("Index is out of range.");

                data[i * (dim1 * dim2) + j * dim2 + k] = value;
            }
        }

        public T[] GetValues0(int i)
        {
            if (i < 0 || i >= dim0)
                throw new IndexOutOfRangeException("Index is out of range.");

            T[] result = new T[dim1 * dim2];
            Array.Copy(data, i * (dim1 * dim2), result, 0, dim1 * dim2);
            return result;
        }

        public T[] GetValues1(int j)
        {
            if (j < 0 || j >= dim1)
                throw new IndexOutOfRangeException("Index is out of range.");

            T[] result = new T[dim0 * dim2];
            for (int i = 0; i < dim0; i++)
                for (int k = 0; k < dim2; k++)
                    result[i * dim2 + k] = data[i * (dim1 * dim2) + j * dim2 + k];

            return result;
        }

        public T[] GetValues2(int k)
        {
            if (k < 0 || k >= dim2)
                throw new IndexOutOfRangeException("Index is out of range.");

            T[] result = new T[dim0 * dim1];
            for (int i = 0; i < dim0; i++)
                for (int j = 0; j < dim1; j++)
                    result[i * dim1 + j] = data[i * (dim1 * dim2) + j * dim2 + k];

            return result;
        }

        public void SetValue1(int j, T[] values)
        {
            if (j < 0 || j >= dim1)
                throw new IndexOutOfRangeException("Index is out of range.");

            if (values.Length != dim0 * dim2)
                throw new ArgumentException("Input array length does not match the dimensions.");

            for (int i = 0; i < dim0; i++)
                for (int k = 0; k < dim2; k++)
                    data[i * (dim1 * dim2) + j * dim2 + k] = values[i * dim2 + k];
        }

        public void SetValue2(int k, T[] values)
        {
            if (k < 0 || k >= dim2)
                throw new IndexOutOfRangeException("Index is out of range.");

            if (values.Length != dim0 * dim1)
                throw new ArgumentException("Input array length does not match the dimensions.");

            for (int i = 0; i < dim0; i++)
                for (int j = 0; j < dim1; j++)
                    data[i * (dim1 * dim2) + j * dim2 + k] = values[i * dim1 + j];
        }

        public static Array3d<T> CreateUniform(int dim0, int dim1, int dim2, T value)
        {
            Array3d<T> array3d = new Array3d<T>(dim0, dim1, dim2);
            for (int i = 0; i < dim0; i++)
                for (int j = 0; j < dim1; j++)
                    for (int k = 0; k < dim2; k++)
                        array3d[i, j, k] = value;

            return array3d;
        }
    }
}