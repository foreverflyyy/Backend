public class BaseClass {
    protected RootUser mRootUser;

    BaseClass(RootUser rootUser) throws Exception {
        ChangeRootUser(rootUser);
    }

    public void ChangeRootUser(RootUser newRootUser) throws Exception {
        if(newRootUser == RootUser.USER || newRootUser == RootUser.ADMIN)
            mRootUser = newRootUser;
        else
            throw new Exception("Wrong user root!");

        System.out.println("Successfully change root User!");
    }
}
