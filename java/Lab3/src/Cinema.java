import java.util.LinkedList;
import java.util.Scanner;

public class Cinema extends BaseClass {
    private String mCinemaName;
    private LinkedList<CinemaHall> mCinemaHalls = new LinkedList<>();

    Cinema(RootUser rootUser, String cinemaName) throws Exception {
        super(rootUser);
        mCinemaName = cinemaName;
    }

    public String GetCinemaName() {
        return mCinemaName;
    }

    public LinkedList<CinemaHall> GetCinemaHalls() {
        return mCinemaHalls;
    }

    public void AddNewCinemaHall() throws Exception {
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
        }

        System.out.println();
        System.out.println("Enter name of the cinema hall:");

        Scanner in = new Scanner(System.in);
        String nameCinemaHall = in.next();

        if(nameCinemaHall.isEmpty()) {
            System.out.println("Wrong specified the name of cinema hall.");
            return;
        }

        System.out.println();
        System.out.println("Enter count of chairs in cinema hall:");
        int countChairs = in.nextInt();

        if(countChairs < 0) {
            System.out.println("Wrong specified the count chairs.");
            return;
        }

        CinemaHall newCinemaHall = new CinemaHall(
            mRootUser,
            nameCinemaHall,
            countChairs
        );

        mCinemaHalls.add(newCinemaHall);
        System.out.println("Successfully new film was added.");
    }

    public void BuyNewTicketOnFilm() {
        System.out.println("Which the cinema hall do you wanna to buy (choose number of hall):");

        for(int i = 0; i < mCinemaHalls.size(); i++)
            System.out.println(mCinemaHalls.get(i).GetNameOfHall());

        Scanner in = new Scanner(System.in);
        int indexOfHall = in.nextInt();
        CinemaHall chosenHall = mCinemaHalls.get(indexOfHall);

        System.out.println();
        System.out.println("List of sessions in the cinema hall:" + chosenHall.GetNameOfHall());
        int amountFilmsInHall = chosenHall.GetFilmsInHall().size();

        for(int i = 0; i < amountFilmsInHall; i++){
            Film currentFilm = chosenHall.GetFilmsInHall().get(i);
            System.out.println("Film: " + currentFilm.GetNameFilm());
            System.out.println("Date: " + currentFilm.GetDateFilm());
            System.out.println("Occupied places: " + currentFilm.GetCountOccupiedPlaces());

            System.out.println();
        }

        System.out.println("Choose number of film");
        int indexOfFilm = in.nextInt();

        if(indexOfFilm < 0 || indexOfFilm > amountFilmsInHall){
            System.out.println("Wrong number. Try again.");
            return;
        }

        Film chosenFilm = chosenHall.GetFilmsInHall().get(indexOfFilm);

        System.out.println();
        int countFreePlaces = chosenHall.GetCountChairsInHall() - chosenFilm.GetCountOccupiedPlaces();

        if(countFreePlaces == 0){
            System.out.println("No movie tickets available on this film.");
            return;
        }

        System.out.println();
        System.out.println("Film: " + chosenFilm.GetNameFilm());
        System.out.println("Date: " + chosenFilm.GetDateFilm());
        System.out.println("Duration: " + chosenFilm.GetDurationFilm());
        System.out.println("Free places: " + countFreePlaces);
        System.out.println();

        System.out.println("Do you wanna but the ticket on this film? (1 - yes, 2 - not)");
        int numButOrNotTicket = in.nextInt();

        if(numButOrNotTicket == 1) {
            chosenFilm.SetCountOccupiedPlaces(chosenFilm.GetCountOccupiedPlaces() + 1);
            System.out.println("You successfully buy ticket on this film!");
            return;
        }

        System.out.println("Wrong number. Try again.");
    }
}










