import java.util.Date;

public class Film extends BaseClass {

    private String mNameFilm;
    private Date mDateFilm;
    private Integer mDurationFilm;
    private Integer mCountOccupiedPlaces;

    Film(
            RootUser rootUser,
            String nameFilm,
            Date dateFilm,
            Integer durationFilm
    ) throws Exception {
        super(rootUser);

        mNameFilm = nameFilm;
        mDateFilm = dateFilm;
        mDurationFilm = durationFilm;
    }

    public String GetNameFilm() { return mNameFilm; }

    public Date GetDateFilm() { return mDateFilm; }

    public Integer GetDurationFilm() { return mDurationFilm; }

    public Integer GetCountOccupiedPlaces() { return mCountOccupiedPlaces; }

    public void SetCountOccupiedPlaces(Integer countOccupiedPlaces){
        if(mRootUser == RootUser.USER){
            System.out.println("Refuse in access!");
        }

        mCountOccupiedPlaces = countOccupiedPlaces;
    }
}
