/*
    Класс Array3d должен представлять трехмерный массив, но по факту хранит данные в одномерном массиве.
    Список методов:
    Инициализация экземпляра с размерами (dim0, dim1, dim2)
    Индексатор для доступа к элементам массива по трехмерным координатам (i, j, k)
    Метод GetValues0(int i): отдаёт срез массива по первой координате (i, .., ..).
    Метод GetValues1(int j): отдаёт срез массива по второй координате (.., j, ..).
    Метод GetValues2(int k): отдаёт срез массива по третьей координате (.., .., k).
    Метод GetValues01(int i, int j): отдаёт срез массива по первой и второй координатам (i, j, ..)
    Метод GetValues02(int i, int k): отдаёт срез массива по первой и третьей координатам (i, .., k)
    Метод GetValues12(int j, int k): отдаёт срез массива по второй и третьей координатам (.., j, k)
    Метод SetValues0(int i, [][]): задаёт значения в массиве для заданной первой координаты
    Метод SetValues1(int j, [][]): задаёт значения в массиве для заданной второй координаты
    Метод SetValues2(int k, [][]): задаёт значения в массиве для заданной третьей координаты
    Метод SetValues01(int i, int j, [][]): задаёт значения в массиве для заданных первой и второй координат
    Метод SetValues02(int i, int k, [][]): задаёт значения в массиве для заданных первой и третьей координат
    Метод SetValues12(int j, int k, [][]): задаёт значения в массиве для заданных второй и третьей координат
    Методы для создания массива с одинаковыми элементами: ones, zeros,fill
*/

class Array3d {
    private readonly dim0: number;
    private readonly dim1: number;
    private readonly dim2: number;
    private readonly data: number[];

    constructor(dim0: number, dim1: number, dim2: number) {
        this.dim0 = dim0;
        this.dim1 = dim1;
        this.dim2 = dim2;
        this.data = new Array(dim0 * dim1 * dim2).fill(null);
    }

    private getIndex(i: number, j: number, k: number): number {
        return i * this.dim1 * this.dim2 + j * this.dim2 + k;
    }

    getValue(i: number, j: number, k: number): number {
        const index = this.getIndex(i, j, k);
        return this.data[index];
    }

    setValue(i: number, j: number, k: number, value: number): void {
        const index = this.getIndex(i, j, k);
        this.data[index] = value;
    }

    getValues0(i: number): number[] {
        const slice: number[] = [];
        for (let j = 0; j < this.dim1; j++) {
            for (let k = 0; k < this.dim2; k++) {
                slice.push(this.getValue(i, j, k));
            }
        }
        return slice;
    }

    getValues1(j: number): number[] {
        const slice: number[] = [];
        for (let i = 0; i < this.dim0; i++) {
            for (let k = 0; k < this.dim2; k++) {
                slice.push(this.getValue(i, j, k));
            }
        }
        return slice;
    }

    getValues2(k: number): number[] {
        const slice: number[] = [];
        for (let i = 0; i < this.dim0; i++) {
            for (let j = 0; j < this.dim1; j++) {
                slice.push(this.getValue(i, j, k));
            }
        }
        return slice;
    }

    getValues01(i: number, j: number): number[] {
        const slice: number[] = [];
        for (let k = 0; k < this.dim2; k++) {
            slice.push(this.getValue(i, j, k));
        }
        return slice;
    }

    getValues02(i: number, k: number): number[] {
        const slice: number[] = [];
        for (let j = 0; j < this.dim1; j++) {
            slice.push(this.getValue(i, j, k));
        }
        return slice;
    }

    getValues12(j: number, k: number): number[] {
        const slice: number[] = [];
        for (let i = 0; i < this.dim0; i++) {
            slice.push(this.getValue(i, j, k));
        }
        return slice;
    }

    setValues0(i: number, values: number[][]): void {
        for (let j = 0; j < this.dim1; j++) {
            for (let k = 0; k < this.dim2; k++) {
                this.setValue(i, j, k, values[j][k]);
            }
        }
    }

    setValues1(j: number, values: number[][]): void {
        for (let i = 0; i < this.dim0; i++) {
            for (let k = 0; k < this.dim2; k++) {
                this.setValue(i, j, k, values[i][k]);
            }
        }
    }

    setValues2(k: number, values: number[][]): void {
        for (let i = 0; i < this.dim0; i++) {
            for (let j = 0; j < this.dim1; j++) {
                this.setValue(i, j, k, values[i][j]);
            }
        }
    }

    setValues01(i: number, j: number, values: number[]): void {
        for (let k = 0; k < this.dim2; k++) {
            this.setValue(i, j, k, values[k]);
        }
    }

    setValues02(i: number, k: number, values: number[]): void {
        for (let j = 0; j < this.dim1; j++) {
            this.setValue(i, j, k, values[j]);
        }
    }

    setValues12(j: number, k: number, values: number[]): void {
        for (let i = 0; i < this.dim0; i++) {
            this.setValue(i, j, k, values[i]);
        }
    }

    static ones(dim0: number, dim1: number, dim2: number): Array3d {
        const array3d = new Array3d(dim0, dim1, dim2);
        for (let i = 0; i < dim0; i++) {
            for (let j = 0; j < dim1; j++) {
                for (let k = 0; k < dim2; k++) {
                    array3d.setValue(i, j, k, 1);
                }
            }
        }
        return array3d;
    }

    static zeros(dim0: number, dim1: number, dim2: number): Array3d {
        return new Array3d(dim0, dim1, dim2);
    }

    static fill(dim0: number, dim1: number, dim2: number, value: number): Array3d {
        const array3d = new Array3d(dim0, dim1, dim2);
        for (let i = 0; i < dim0; i++) {
            for (let j = 0; j < dim1; j++) {
                for (let k = 0; k < dim2; k++) {
                    array3d.setValue(i, j, k, value);
                }
            }
        }
        return array3d;
    }
}

// Пример использования
const arrOnes = Array3d.ones(3, 3, 3);
console.log(arrOnes.getValues0(0));
console.log(arrOnes.getValues1(1));
console.log(arrOnes.getValues2(2));
console.log(arrOnes.getValues01(0, 1));
console.log(arrOnes.getValues02(0, 2));
console.log(arrOnes.getValues12(1, 2));

const arrZeros = Array3d.zeros(2, 2, 2);
console.log(arrZeros.getValues0(1));
console.log(arrZeros.getValues1(0));
console.log(arrZeros.getValues2(1));
console.log(arrZeros.getValues01(1, 0));
console.log(arrZeros.getValues02(1, 1));
console.log(arrZeros.getValues12(0, 1));

const arrFill = Array3d.fill(2, 3, 4, 5);
console.log(arrFill.getValues0(1));
console.log(arrFill.getValues1(2));
console.log(arrFill.getValues2(3));
console.log(arrFill.getValues01(1, 2));
console.log(arrFill.getValues02(1, 3));
console.log(arrFill.getValues12(2, 3));

const arr = new Array3d(3, 4, 5);
const values = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
arr.setValues0(1, values);
console.log(arr.getValues0(1));