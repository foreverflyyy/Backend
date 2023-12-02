/*
    Создать класс Array3d, который будет представлять трехмерный массив,
    но на самом деле будет хранить данные в одномерном массиве. Вот список методов, которые нужно реализовать:
    Создание экземпляра класса Array3d с заданными размерами (dim0, dim1, dim2)
    Индексатор для доступа к элементам массива по трехмерным координатам (i, j, k)
    Метод GetValues0(int i): возвращает срез массива по первой координате (i, .., ..).
    Метод GetValues1(int j): возвращает срез массива по второй координате (.., j, ..).
    Метод GetValues2(int k): возвращает срез массива по третьей координате (.., .., k).
    Метод GetValues01(int i, int j): возвращает срез массива по первой и второй координатам (i, j, ..)
    Метод GetValues02(int i, int k): возвращает срез массива по первой и третьей координатам (i, .., k)
    Метод GetValues12(int j, int k): возвращает срез массива по второй и третьей координатам (.., j, k)
    Метод SetValues0(int i, [][]): устанавливает значения в массиве для заданной первой координаты
    Метод SetValues1(int j, [][]): устанавливает значения в массиве для заданной второй координаты
    Метод SetValues2(int k, [][]): устанавливает значения в массиве для заданной третьей координаты
    Метод SetValues01(int i, int j, [][]): устанавливает значения в массиве для заданных первой и второй координат
    Метод SetValues02(int i, int k, [][]): устанавливает значения в массиве для заданных первой и третьей координат
    Метод SetValues12(int j, int k, [][]): устанавливает значения в массиве для заданных второй и третьей координат
    Методы для создания массива с одинаковыми элементами: ones, zeros,fill
*/

interface Props {
    init: string
}

const init = (init : Props) => {
    console.log(init)
}

init({init: "init"})