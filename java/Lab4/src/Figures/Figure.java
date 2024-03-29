package Figures;

public abstract class Figure {
    public char getColor() {
        return color;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setColor(char color) {
        this.color = color;
    }

    private String name;

    public String getName() {
        return name;
    }

    private char color;

    public Figure(String name, char color) {
        this.name = name;
        this.color = color;
    }

    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1){
        return (row >=0 && row < 8 )&&(col >=0 && col < 8)&&
                (row1 >=0 && row1 < 8 )&&(col1 >=0 && col1 < 8);
    }

    public boolean canAttack(Figure fields[][], int row, int col, int row1, int col1){
        return this.canMove(fields, row, col, row1, col1);
    }
}
