import java.util.*;

public class Tasks {

    /*1. Сиракузская последовательность
    Сиракузская последовательность, или последовательность Коллатца, строится так: возьмём натуральное число n; если
    оно чётное, то заменим его числом n/2; если же оно нечётное, то заменим его числом 3n+1.
    Получившееся число — следующее в сиракузской последовательности после числа n. Затем заменяем получившееся
    число по тому же правилу, и так далее. Обычно, если проделать такую замену достаточно много раз, мы приходим к
    числу 1 (за которым следует снова ).*/
    public void CountNumberOfStepsToOne(int number, int amountSteps) {
        if(number == 1) {
            System.out.println("Total steps: " + amountSteps);
            return;
        }

        if(number % 2 == 0)
            number /= 2;
        else
            number = (3 * number) + 1;

        CountNumberOfStepsToOne(number, ++amountSteps);
    }

    /*2. Сумма ряда
    C клавиатуры вводится натуральное число n > 0, потом n чисел, каждое на новой строке. Вычислите и
    напечатайте знакочередующуюся сумму ряда (первое число прибавить, второе вычесть, третье прибавить и
    т.д.) Например, для чисел 1,2,3,4 сумма будет следующей: 1 - 2 + 3 - 4 = -2. */
    public void AlternatingSumSeries() throws NullPointerException {
        Scanner in = new Scanner(System.in);
        System.out.print("Input count of numbers: ");
        int num = in.nextInt();

        if(num == 0) {
            System.out.println("Finally sum: 0");
            return;
        }

        if(num < 0)
            throw new NullPointerException("Enter positive number!");

        int sum = 0;
        System.out.println("Input numbers:");
        for(int i = 0; i < num; i++) {
            int number = in.nextInt();

            if(i % 2 == 0)
                sum += number;
            else
                sum -= number;
        }

        System.out.println("Finally sum: " + sum);
        in.close();
    }

    /*Ищем клад.
    Мы находимся в точке с координатами (0, 0).
    Нам известно, где закопан клад, но этого мало: остров полон опасностей, и нужно перемещаться строго по указаниям карты,
    которая, к счастью, тоже имеется в нашем распоряжении. Мы хотим найти клад как можно скорее. Сначала вводятся два
    числа: координаты клада по оси икс (запад-восток) и игрек (юг-север). Затем следует некоторое количество указаний карты.
    Каждое указание карты состоит из двух строк. Первая строка содержит слово «север», «юг», «запад» или «восток»,
    вторая — натуральное число, количество шагов, которое нужно пройти в данном направлении.
    Заключительное указание карты состоит только из одной строки, содержащей слово «стоп».
    Программа выводит минимальное количество указаний карты, которое нужно выполнить, чтобы прийти к кладу.
    Гарантируется, что карта приводит к кладу.*/
    public void SearchTreasure() {
        int x = 0;
        int y = 0;

        Scanner in = new Scanner(System.in);
        System.out.print("Enter x coordinate: ");
        int target_x = in.nextInt();

        System.out.print("Enter y coordinate: ");
        int target_y = in.nextInt();

        int allSteps = 0;
        int stepsToTarget = 0;

        while(true) {
            System.out.print("Enter direction: ");
            String direction = in.next();

            allSteps++;

            if(x == target_x && y == target_y && stepsToTarget == 0)
                stepsToTarget = allSteps;

            if(direction.equals("стоп"))
                break;

            System.out.print("Enter amount steps: ");
            int steps = in.nextInt();

            switch(direction) {
                case "север":
                    y += steps;
                    break;
                case "запад":
                    x -= steps;
                    break;
                case "восток":
                    x += steps;
                    break;
                case "юг":
                    y -= steps;
                    break;
                default:
                    System.out.print("invalid direction (you can use only: север, юг, восток, запад и стоп)");
                    break;
            }
        }

        if(x == target_x && y == target_y)
            System.out.println("Congratulation! You find the treasure!");
        else
            System.out.println("You didn't find the treasure! The map was wrong!");

        System.out.println("All steps: " + stepsToTarget);
        in.close();
    }

    /*Логистический максимин
    Ваша компания занимается грузоперевозками в Швейцарских Альпах. Вам нужно доставить груз из пункта A в пункт Z
    на большом грузовике. Из A в Z ведёт несколько дорог, каждая из которых проходит через несколько туннелей известной
    высоты. Выясните максимальную высоту, которую может иметь ваш грузовик. */
    public void FindMaxHeightCarInRoad() {
        int needRoad = 1;
        int minHeight = 0;

        Scanner in = new Scanner(System.in);
        System.out.print("Input quantity of roads: ");
        int numRoads = in.nextInt();

        for(int i = 0; i < numRoads; i++){
            int minHeightByTunnel = 10000;

            System.out.print("Input quantity of tunnel by road №" + (i+1) + ": ");
            int amountTunnelByRoad = in.nextInt();

            System.out.println("Input height every tunnel: ");
            for(int j = 0; j < amountTunnelByRoad; j++){
                int heightTunnel = in.nextInt();

                if(heightTunnel < minHeightByTunnel)
                    minHeightByTunnel = heightTunnel;
            }

            if(minHeightByTunnel > minHeight) {
                minHeight = minHeightByTunnel;
                needRoad = i + 1;
            }
        }

        System.out.println("Road - " + needRoad + "; Height - " + minHeight);
        in.close();
    }

    /*Дважды четное число
    Целое трехзначное число называется «дважды четным», если и сумма его цифр, и их произведение являются четными.
    Напишите класс, который принимает с клавиатуры положительное трехзначное число и проверяет, является ли оно «дважды четным».*/
    public void isDoubleNumberParity() {
        Scanner in = new Scanner(System.in);
        System.out.print("Input count of numbers: ");
        int number = in.nextInt();

        if(number < 100 || number > 999) {
            System.out.println("This is Invalid Number (only 100-999)");
            return;
        }

        int sum = 0;
        int mul = 1;

        while (number > 0) {
            sum += number % 10;
            mul *= number % 10;

            number = number / 10;
        }

        if(sum % 2 == 0 && mul % 2 == 0)
            System.out.println("This is Double Number Parity");
        else
            System.out.println("This is not Double Number Parity");

        in.close();
    }
}
