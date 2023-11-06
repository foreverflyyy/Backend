package Figures;

public class Bishop extends Figure{
    public Bishop(String name, char color) {
        super(name, color);
    }

    @Override
    public boolean canMove(Figure fields[][], int row, int col, int row1, int col1) {
        if (!super.canMove(fields, row, col, row1, col1))
            return false;

        if(row == row1 || col == col1)
            return false;

        int columnIndex = col;
        int rowIndex = row;

        if(rowIndex < row1 && columnIndex < col1) {
            while((columnIndex + 1) != col1 || (rowIndex + 1) != row1) {
                columnIndex += 1;
                rowIndex += 1;

                boolean wrongField = (columnIndex == col1 && rowIndex != row1) || (columnIndex != col1 && rowIndex == row1);
                if(wrongField || fields[rowIndex][columnIndex] != null)
                    return false;
            }
        }else if(rowIndex < row1 && columnIndex > col1) {
            System.out.println("Ошибкаdddddd!");
            while((columnIndex - 1) != col1 || (rowIndex + 1) != row1) {
                columnIndex -= 1;
                rowIndex += 1;

                System.out.println("columnIndex: " + columnIndex + "; rowIndex: " + rowIndex);
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

    @Override
    public boolean canAttack(Figure fields[][], int row, int col, int row1, int col1) {
        return canMove(fields, row, col, row1, col1);
    }
}
