import enums.RootUser;
import java.util.LinkedList;
import java.util.Scanner;

public class Network extends BaseClass {
    private LinkedList<Cinema> mCinemas = new LinkedList<>();

    Network(RootUser rootUser) throws Exception {
        super(rootUser);
    }

    public Cinema ChooseNeedCinema() throws Exception {
        System.out.println("List of cinemas:");
        System.out.println();

        for (int i = 0; i < mCinemas.size(); i++)
            System.out.println((i + 1) + ") " + mCinemas.get(i).GetCinemaName());

        /*for (Cinema mCinema : mCinemas)
            System.out.println("Cinema: " + mCinema.GetCinemaName());*/

        System.out.print("Choose the cinema number you need:");
        Scanner in = new Scanner(System.in);
        int indexOfCinema = in.nextInt() - 1;

        if(indexOfCinema < 1 || indexOfCinema > (mCinemas.size() - 1))
            throw new Exception("Wrong number!");

        return mCinemas.get(indexOfCinema);
    }

    public void AddNewCinema() throws Exception {
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
            return;
        }

        System.out.println();
        System.out.println("Enter name of the cinema hall:");

        Scanner in = new Scanner(System.in);
        String nameCinema = in.next();

        if(nameCinema.isEmpty()) {
            System.out.println("Wrong specified the name of cinema hall.");
            return;
        }

        Cinema newCinema = new Cinema(
                mRootUser,
                nameCinema
        );

        mCinemas.add(newCinema);
        System.out.println("Successfully new cinema was added.");
    }

    public RootUser ChangeCurrentRootUser() throws Exception {
        RootUser needRootUser;

        if(mRootUser == RootUser.USER)
            needRootUser = RootUser.ADMIN;
        else
            needRootUser = RootUser.USER;

        ChangeRootUser(needRootUser);
        System.out.println("Successfully change root user.");

        return needRootUser;
    }
}
