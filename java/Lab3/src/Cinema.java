import enums.RootUser;

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

    public CinemaHall ChooseCinemaHall() throws Exception {
        if(mCinemaHalls.isEmpty()) {
            System.out.println("The are not cinema halls");
            return null;
        }

        System.out.println("List of cinema halls:");

        for (int i = 0; i < mCinemaHalls.size(); i++)
            System.out.println((i + 1) + ") " + mCinemaHalls.get(i).GetNameOfHall());

        /*for (Cinema mCinema : mCinemas)
            System.out.println("Cinema: " + mCinema.GetCinemaName());*/

        System.out.print("Choose the cinema hall number you need:");
        Scanner in = new Scanner(System.in);
        int indexOfCinemaHall = in.nextInt() - 1;

        if(indexOfCinemaHall < 0 || indexOfCinemaHall > (mCinemaHalls.size() - 1))
            throw new Exception("Wrong number!");

        return mCinemaHalls.get(indexOfCinemaHall);
    }

    public void AddNewCinemaHall() throws Exception {
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
            return;
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
        System.out.println("Successfully new cinema hall was added.");
    }
}










