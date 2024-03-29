package Figures;

public class Rook extends Figure{
    public Rook(String name, char color) {
        super(name, color);
    }

    @Override
    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1) {
        if (!super.canMove(fields, row, col, row1, col1))
            return false;

        boolean firstCondition = (row == row1) && (col != col1);
        boolean firstSubCondition = true;
        if (firstCondition) {
            if (col > col1 && (col + 1) != 8) {
                for (int i = col - 1; i > col1; i--)
                    if (fields[row][i] != null) {
                        firstSubCondition = false;
                        break;
                    }
            }
            if (col < col1 && (col + 1) != 8) {
                for (int i = col + 1; i < col1; i++)
                    if (fields[row][i] != null) {
                        firstSubCondition = false;
                        break;
                    }
            }
        }
        if (firstCondition && firstSubCondition) return true;

        boolean secondCondition = (row != row1) && (col == col1);
        boolean secondSubCondition = true;
        if (secondCondition) {
            if (row > row1 && (row + 1) != 8) {
                for (int i = row - 1; i > row1; i--)
                    if (fields[i][col] != null) {
                        System.out.println("1] i - " + i);
                        secondSubCondition = false;
                        break;
                    }
            }
            if (row < row1 && (row + 1) != 8) {
                for (int i = row + 1; i < row1; i++)
                    if (fields[i][col] != null) {
                        System.out.println("2] i - " + i);
                        secondSubCondition = false;
                        break;
                    }
            }
        }

        return secondCondition && secondSubCondition;
    }

    @Override
    public boolean canAttack(Figure fields[][], int row, int col, int row1, int col1) {
        return canMove(fields, row, col, row1, col1);
    }
}
