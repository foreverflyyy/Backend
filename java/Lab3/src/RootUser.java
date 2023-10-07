public enum RootUser {
    USER("USER"),
    // ...
    ADMIN("ADMIN");

    public final String label;

    private RootUser(String label) {
        this.label = label;
    }
}