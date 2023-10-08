package enums;

public enum ConsoleAction {
    MAIN("MAIN"),
    CINEMA("CINEMA"),
    CINEMA_HALL("CINEMA_HALL"),
    FILM("FILM");

    public final String label;

    private ConsoleAction(String label) {
        this.label = label;
    }
}
