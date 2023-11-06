package Figures;

public class King extends Figure{
    public King(String name, char color) {
        super(name, color);
    }

    @Override
    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1) {
        if (!super.canMove(fields, row, col, row1, col1))
            return false;

        int differentRows = row1 - row;
        int differentColumns = col1 - col;
        return (-1 <= differentRows && differentRows <= 1) && (-1 <= differentColumns && differentColumns <= 1);
    }

    @Override
    public boolean canAttack(Figure fields[][], int row, int col, int row1, int col1) {
        return Math.abs(row - row1) == 1 && Math.abs(col - col1) == 1;
    }
}
