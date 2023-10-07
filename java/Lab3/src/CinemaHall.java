import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.Locale;
import java.util.Scanner;

public class CinemaHall extends BaseClass{

    private String mNameOfHall;
    private Integer mCountChairs;
    private LinkedList<Film> mCinemaFilms = new LinkedList<Film>();

    CinemaHall(RootUser rootUser, String nameOfHall, Integer countChairs) throws Exception {
        super(rootUser);
        mNameOfHall = nameOfHall;
        mCountChairs = countChairs;
    }

    public String GetNameOfHall() {
        return mNameOfHall;
    }

    public Integer GetCountChairsInHall() { return mCountChairs; }

    public LinkedList<Film> GetFilmsInHall() {
        return mCinemaFilms;
    }

    public void AddNewCinemaFilm() throws Exception {
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
        }

        System.out.println();
        System.out.println("Enter name of film:");

        Scanner in = new Scanner(System.in);
        String nameFilm = in.next();

        if(nameFilm.isEmpty()) {
            System.out.println("Wrong specified the name of film.");
            return;
        }

        System.out.println();
        System.out.println("Enter date of film (example: January 2, 2010):");
        String lineWithData = in.next();

        String[] parts = lineWithData.split(" ");
        if(parts.length != 2) {
            System.out.println("Wrong specified the date of film.");
            return;
        }

        DateFormat format = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
        Date dateFilm = format.parse(lineWithData);
        System.out.println(dateFilm);

        System.out.println();
        System.out.println("Enter duration of film(in minutes):");
        int durationFilm = in.nextInt();

        if(durationFilm < 0) {
            System.out.println("Wrong specified the duration of film.");
            return;
        }

        Film cinemaFilm = new Film(
                mRootUser,
                nameFilm,
                dateFilm,
                durationFilm
        );

        mCinemaFilms.add(cinemaFilm);
        System.out.println("Successfully new film was added.");
    }
}
