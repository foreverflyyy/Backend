import java.util.Arrays;
import java.lang.String;

public class Tasks {

    /* 1. Напишите метод, который принимает строку и возвращает наибольшую подстроку, в
    которой все символы уникальны.*/
    public String FindMaxSubstring(String line) {
        String resultLine = "";

        for(int i = 0; i < line.length(); i++) {
            String symbol = Character.toString(line.charAt(i));
            String uniqueSymbolsFromString = symbol;

            for(int j = i + 1; j < line.length(); j++) {
                String nextSymbol = Character.toString(line.charAt(j));

                if(!uniqueSymbolsFromString.contains(nextSymbol)) {
                    uniqueSymbolsFromString += nextSymbol;
                }
                else if(resultLine.length() < uniqueSymbolsFromString.length()) {
                    resultLine = uniqueSymbolsFromString;
                }
                else
                    break;
            }
        }

        return resultLine;
    }

    /* 2. Напишите метод, который принимает два отсортированных массива и возвращает
    новый массив, содержащий все элементы из обоих массивов в отсортированном порядке. */
    public int[] UnionArraysAndSort(int[] firstArr, int[] secondArr) {
        int[] newArr = new int[firstArr.length + secondArr.length];

        int indexNewArr = 0;

        for(int i = 0; i < firstArr.length; i++)
            newArr[i] = firstArr[i];

        for(int i = 0; i < secondArr.length; i++)
            newArr[firstArr.length + i] = secondArr[i];

        Arrays.sort(newArr);

        return newArr;
    }

    /*3. Напишите метод, который принимает массив целых чисел и возвращает максимальную
    сумму подмассива (последовательных элементов).*/
    public int FindMaxSumNumbers(int[] arrNumbers) {
        int result = Integer.MIN_VALUE;
        int sumOfNumbers = 0;

        for(int i = 0; i < arrNumbers.length; i++){

            if(sumOfNumbers == 0 || arrNumbers[i] > arrNumbers[i - 1]){
                sumOfNumbers += arrNumbers[i];
                continue;
            }

            if(sumOfNumbers > result)
                result = sumOfNumbers;

            i--;
            sumOfNumbers = 0;
        }

        return result;
    }

    /*4. Напишите метод, который принимает двумерный массив и возвращает новый массив,
    полученный путем поворота исходного массива на 90 градусов по часовой стрелке*/
    public void RotateArray(int number, int amountSteps) {

    }

    /* 5. Напишите метод, который принимает массив целых чисел и целое число target и
    возвращает пару элементов массива, сумма которых равна target. Если такая пара не существует,
    метод должен вернуть null*/
    public int[] GetCoupleOfNumbersOrNull(int[] arrNumbers, int target) {
        int[] coupleOfNumbers = null;

        for(int i = 0; i < arrNumbers.length; i++){
            int currentNum = arrNumbers[i];

            for(int j = i + 1; j < arrNumbers.length; j ++) {
                if (currentNum + arrNumbers[j] == target){
                    coupleOfNumbers = new int[] {currentNum, arrNumbers[j]};
                    break;
                }
            }

            if(coupleOfNumbers != null)
                break;
        }

        return coupleOfNumbers;
    }

    /* 6. Напишите метод, который принимает двумерный массив целых чисел и возвращает их сумму*/
    public int GetSumOfNumbers(int[][] arrNumbers) {

        int result = 0;

        for(int i = 0; i < arrNumbers.length; i ++)
            for(int j = 0; j < arrNumbers[i].length; j ++)
                result += arrNumbers[i][j];

        return result;
    }

    /* 7. Напишите метод, который принимает двумерный массив целых чисел и возвращает
    одномерный массив, содержащий максимальный элемент из каждой строки исходного массива*/
    public int[] GetArrayMaxNumbersFromDoubleArray(int[][] arrNumbers) {
        int[] resultArr = new int[arrNumbers.length];

        for(int i = 0; i < arrNumbers.length; i++){
            int maxNumber = Integer.MIN_VALUE;

            for(int j = 0; j < arrNumbers[i].length; j ++)
                if(arrNumbers[i][j] > maxNumber)
                    maxNumber = arrNumbers[i][j];

            resultArr[i] = maxNumber;
        }

        return resultArr;
    }

    /*8. Напишите метод, который принимает двумерный массив и возвращает новый массив,
    полученный путем поворота исходного массива на 90 градусов по часовой стрелке*/
    public void RotateDoubleArray(int number, int amountSteps) {

    }
}
