package Figures;

public class Queen extends Figure{
    public Queen(String name, char color) {
        super(name, color);
    }

    @Override
    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1) {
        if (!super.canMove(fields, row, col, row1, col1))
            return false;

        if(row == row1 || col == col1)
            return MotionByHorizontalOrVertical(fields, row, col, row1, col1);

        return MotionByDiagonal(fields, row, col, row1, col1);
    }

    public boolean MotionByDiagonal(Figure fields[][], int row, int col, int row1, int col1) {
        int rowIndex = row;
        int columnIndex = col;

        if(rowIndex < row1 && columnIndex < col1) {
            while((columnIndex + 1) != col1 || (rowIndex + 1) != row1) {
                columnIndex += 1;
                rowIndex += 1;

                boolean wrongField = (columnIndex == col1 && rowIndex != row1) || (columnIndex != col1 && rowIndex == row1);
                if(wrongField || fields[rowIndex][columnIndex] != null)
                    return false;
            }
        }else if(rowIndex < row1 && columnIndex > col1) {
            while((columnIndex - 1) != col1 || (rowIndex + 1) != row1) {
                columnIndex -= 1;
                rowIndex += 1;

                boolean wrongField = (columnIndex == col1 && rowIndex != row1) || (columnIndex != col1 && rowIndex == row1);
                if(wrongField || fields[rowIndex][columnIndex] != null) {
                    return false;
                }
            }
        }else if(rowIndex > row1 && columnIndex > col1) {
            while((columnIndex - 1) != col1 || (rowIndex - 1) != row1) {
                columnIndex -= 1;
                rowIndex -= 1;

                boolean wrongField = (columnIndex == col1 && rowIndex != row1) || (columnIndex != col1 && rowIndex == row1);
                if(wrongField || fields[rowIndex][columnIndex] != null)
                    return false;
            }
        }else if(rowIndex > row1 && columnIndex < col1) {
            while((columnIndex + 1) != col1 || (rowIndex - 1) != row1) {
                columnIndex += 1;
                rowIndex -= 1;

                boolean wrongField = (columnIndex == col1 && rowIndex != row1) || (columnIndex != col1 && rowIndex == row1);
                System.out.println("columnIndex: " + columnIndex + "; rowIndex: " + rowIndex);
                if(wrongField || fields[rowIndex][columnIndex] != null)
                    return false;
            }
        }

        return true;
    }

    public boolean MotionByHorizontalOrVertical (Figure fields[][], int row, int col, int row1, int col1) {
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
