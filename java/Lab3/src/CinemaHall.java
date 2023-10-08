import enums.RootUser;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
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

    public Film ChooseFilm() throws Exception {
        if(mCinemaFilms.isEmpty()) {
            System.out.println("The are not cinema films");
            return null;
        }

        System.out.println("List of films:");

        for (int i = 0; i < mCinemaFilms.size(); i++)
            System.out.println((i + 1) + ") " + mCinemaFilms.get(i).GetNameFilm());

        /*for (Cinema mCinema : mCinemas)
            System.out.println("Cinema: " + mCinema.GetCinemaName());*/

        System.out.print("Choose the film number you need:");
        Scanner in = new Scanner(System.in);
        int indexOfFilm = in.nextInt() - 1;

        if(indexOfFilm < 0 || indexOfFilm > (mCinemaFilms.size() - 1))
            throw new Exception("Wrong number!");

        return mCinemaFilms.get(indexOfFilm);
    }

    public void AddNewCinemaFilm() throws Exception {
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
            return;
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
        System.out.println("Enter the year the movie comes out:");
        int year = in.nextInt();
        System.out.println("Enter the month the movie comes out (in number):");
        int month = in.nextInt();
        System.out.println("Enter the day the movie comes out:");
        int day = in.nextInt();

        if(year < 0 || (month < 1 || month > 12) || (day < 1 || day > 31)){
            System.out.println("Wrong specified the date of film.");
            return;
        }

        LocalDate date = LocalDate.of( year , month , day );
        System.out.println(date);

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
                date,
                durationFilm,
                mCountChairs
        );

        mCinemaFilms.add(cinemaFilm);
        System.out.println("Successfully new film was added.");
    }
}
