package Figures;

public class Knight extends Figure{
    public Knight(String name, char color) {
        super(name, color);
    }

    @Override
    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1) {
        if (!super.canMove(fields, row, col, row1, col1))
            return false;

        boolean firstCondition = (row + 2 == row1) && (col + 1 == col1 || col - 1 == col1);
        boolean secondCondition = (row - 2 == row1) && (col + 1 == col1 || col - 1 == col1);
        boolean thirdCondition =(col + 2 == col1) && (row + 1 == row1 || row - 1 == row1);
        boolean fourthCondition = (col - 2 == col1) && (row + 1 == row1 || row - 1 == row1);

        return firstCondition || secondCondition || thirdCondition || fourthCondition;
    }

    @Override
    public boolean canAttack(Figure fields[][], int row, int col, int row1, int col1) {
        return canMove(fields, row, col, row1, col1);
    }
}
