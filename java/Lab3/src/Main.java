import enums.ConsoleAction;
import enums.RootUser;
import java.util.Scanner;

public class Main {
    public static ConsoleAction CurrentAction = ConsoleAction.MAIN;
    public static RootUser CurrentRootUser = RootUser.ADMIN;
    public static Network CurrentNetwork;
    public static Cinema CurrentCinema;
    public static CinemaHall CurrentCinemaHall;
    public static Film CurrentFilm;

    static {
        try {
            CurrentNetwork = new Network(CurrentRootUser);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String[] args) throws Exception {
        boolean isWork = true;

        while(isWork)
            isWork = ListWithActions();
    }

    public static boolean ListWithActions() throws Exception {
        Scanner in = new Scanner(System.in);

        System.out.println("You are logged in as an - " + CurrentRootUser);
        System.out.println();
        System.out.println("Which the next action?");

        switch(CurrentAction) {
            case MAIN: {
                System.out.println("1) Select the desired cinema.");
                System.out.println("2) Add new cinema.");
                System.out.println("3) Change user rights.");
                System.out.println("4) Exit.");

                System.out.println();
                System.out.println("Select the desired action (1 or 2):");
                int numForAction = in.nextInt();

                if(numForAction == 1) {
                    CurrentCinema = CurrentNetwork.ChooseNeedCinema();
                    CurrentAction = ConsoleAction.CINEMA;
                }
                else if(numForAction == 2)
                    CurrentNetwork.AddNewCinema();
                else if(numForAction == 3) {
                    CurrentRootUser = CurrentNetwork.ChangeCurrentRootUser();
                    CurrentCinema.ChangeRootUser(CurrentRootUser);
                    CurrentCinemaHall.ChangeRootUser(CurrentRootUser);
                    CurrentFilm.ChangeRootUser(CurrentRootUser);
                }
                else if(numForAction == 4)
                    return false;
                else
                    System.out.println("Wrong number.");

                break;
            }
            case CINEMA: {
                System.out.println("1) Select the desired cinema hall.");
                System.out.println("2) Add new cinema hall.");
                System.out.println("3) Back.");

                System.out.println();
                System.out.println("Select the desired action (1, 2 or 3s):");
                int numForAction = in.nextInt();

                if(numForAction == 1) {
                    CurrentCinemaHall = CurrentCinema.ChooseNeedCinemaHall();
                    CurrentAction = ConsoleAction.CINEMA_HALL;
                }else if(numForAction == 2)
                    CurrentCinema.AddNewCinemaHall();
                else if(numForAction == 3)
                    CurrentAction = ConsoleAction.MAIN;
                else
                    System.out.println("Wrong number.");

                break;
            }
            case CINEMA_HALL: {
                System.out.println("1) Select the desired films.");
                System.out.println("2) Add new film in this hall.");
                System.out.println("3) Back.");

                System.out.println();
                System.out.println("Select the desired action (1, 2 or 3):");
                int numForAction = in.nextInt();

                if(numForAction == 1) {
                    CurrentFilm = CurrentCinemaHall.ChooseNeedFilm();
                    CurrentAction = ConsoleAction.FILM;
                }else if(numForAction == 2)
                    CurrentCinemaHall.AddNewCinemaFilm();
                else if(numForAction == 3)
                    CurrentAction = ConsoleAction.CINEMA;
                else
                    System.out.println("Wrong number.");

                break;
            }
            case FILM: {
                System.out.println("1) Show info about film.");
                System.out.println("2) Buy the ticket on this film.");
                System.out.println("3) Back.");

                System.out.println();
                System.out.println("Select the desired action (1 or 2):");
                int numForAction = in.nextInt();

                if(numForAction == 1)
                    CurrentFilm.ShowInfo();
                else if(numForAction == 2)
                    CurrentFilm.BuyTheTicket();
                else if(numForAction == 3)
                    CurrentAction = ConsoleAction.CINEMA_HALL;
                else
                    System.out.println("Wrong number.");

                break;
            }
            default:
                System.out.println("Wrong request.");
                break;
        }

        return true;
    }
}

/* Ваш знакомый — владелец сети кинотеатров. В каждом принадлежащем ему
    кинотеатре есть несколько кинозалов, причем в каждом зале кресла могут
    быть расположены по-разному. Кроме того, различные залы имеют разное
    расписание сеансов. Чтобы не запутаться во всём этом, знакомый попросил
    вас написать для него программу, моделирующую работу кинотеатров. Такую
    программу называют «билетной системой». Программа должна предоставлять
    пользователю возможность вносить «в систему» всю необходимую
    справочную информацию: добавлять кинотеатр, добавлять зал в кинотеатр,
    задавать конфигурацию кресел, создавать сеанс определённого фильма (с
    определённой длительностью и в определённое время). Ну и самое главное:
    «система» должна уметь «продавать» билеты, отвечать на запросы о том, когда
    и где (в каком кинотеатре и зале) будет ближайший сеанс (на который есть
    свободные места) выбранного фильма, печатать для сеанса план зала с
    указанием занятых и свободных мест.

    Необходимо разработать консольный вариант программы, с полностью
    рабочим консольным интерфейсом. Вход реализовать как для администратора
    так и для пользователя.
*/