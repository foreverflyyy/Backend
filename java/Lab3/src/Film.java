import enums.RootUser;

import java.util.Date;
import java.util.Scanner;

public class Film extends BaseClass {

    private String mNameFilm;
    private Date mDateFilm;
    private Integer mDurationFilm;
    private Integer mCountFreePlaces;

    Film(
            RootUser rootUser,
            String nameFilm,
            Date dateFilm,
            Integer durationFilm,
            Integer countChairsInHall
    ) throws Exception {
        super(rootUser);

        mNameFilm = nameFilm;
        mDateFilm = dateFilm;
        mDurationFilm = durationFilm;
        mCountFreePlaces = countChairsInHall;
    }

    public String GetNameFilm() { return mNameFilm; }

    public Date GetDateFilm() { return mDateFilm; }

    public Integer GetDurationFilm() { return mDurationFilm; }

    public Integer GetCountFreePlaces() { return mCountFreePlaces; }

    public void SetCountFreePlaces(Integer countFreePlaces){
        if(mRootUser == RootUser.USER) {
            System.out.println("Refuse in access!");
            return;
        }

        mCountFreePlaces = countFreePlaces;
    }

    public void ShowInfo() {
        System.out.println();
        System.out.println("Film: " + GetNameFilm());
        System.out.println("Date: " + GetDateFilm());
        System.out.println("Duration: " + GetDurationFilm());
        System.out.println("Free places: " + GetCountFreePlaces());
        System.out.println();
    }

    public void BuyTheTicket() {
        int countFreePlaces = GetCountFreePlaces();

        if(countFreePlaces == 0){
            System.out.println("No movie tickets available on this film.");
            return;
        }

        System.out.println("Are you sure you want to but the ticket on this film? (1 - yes, 2 - not)");
        Scanner in = new Scanner(System.in);
        int numButOrNotTicket = in.nextInt();

        if(numButOrNotTicket == 1) {
            SetCountFreePlaces(countFreePlaces - 1);
            System.out.println("You successfully buy ticket on this film!");
            return;
        } else if(numButOrNotTicket == 2)
            return;

        System.out.println("Wrong number. Try again.");
    }
}
