import Figures.Bishop;
import Figures.Figure;
import Figures.King;
import Figures.Knight;
import Figures.Pawn;
import Figures.Queen;
import Figures.Rook;

import java.util.ArrayList;

public class Board {
//TODO: Список фигур и начальное положение всех фигур
    private Figure fields[][] = new Figure[8][8];
    private ArrayList<String> takeWhite = new ArrayList(16);
    private ArrayList<String> takeBlack = new ArrayList(16);

    public char getColorGaming() {
        return colorGaming;
    }

    public void setColorGaming(char colorGaming) {
        this.colorGaming = colorGaming;
    }

    private char colorGaming;

    public void init(){
        this.fields[0] = new Figure[]{
                new Rook("R", 'w'), new Knight("N", 'w'),
                new Bishop("B", 'w'), new Queen("Q", 'w'),
                new King("K", 'w'), new Bishop("B", 'w'),
                new Knight("N", 'w'),new Rook("R", 'w')
        };
        this.fields[1] = new Figure[]{
                new Pawn("P", 'w'),    new Pawn("P", 'w'),
                new Pawn("P", 'w'),    new Pawn("P", 'w'),
                new Pawn("P", 'w'),    new Pawn("P", 'w'),
                new Pawn("P", 'w'),    new Pawn("P", 'w'),
        };

        this.fields[7] = new Figure[]{
                new Rook("R", 'b'), new Knight("N", 'b'),
                new Bishop("B", 'b'), new Queen("Q", 'b'),
                new King("K", 'b'), new Bishop("B", 'b'),
                new Knight("N", 'b'),new Rook("R", 'b')
        };
        this.fields[6] = new Figure[]{
                new Pawn("P", 'b'),    new Pawn("P", 'b'),
                new Pawn("P", 'b'),    new Pawn("P", 'b'),
                new Pawn("P", 'b'),    new Pawn("P", 'b'),
                new Pawn("P", 'b'),    new Pawn("P", 'b'),
        };
    }

    public String getCell(int row, int col){
        Figure figure = this.fields[row][col];
        if (figure == null){
            return "    ";
        }
        return " "+figure.getColor()+figure.getName()+" ";
    }

    public ArrayList<String> getTakeWhite() {
        return takeWhite;
    }

    public ArrayList<String> getTakeBlack() {
        return takeBlack;
    }

    public boolean move_figure(int row1, int col1, int row2, int col2 ){
        if(!((row1 >=0 && row1 < 8 ) && (col1 >=0 && col1 < 8) && (row2 >=0 && row2 < 8) && (col2 >=0 && col2 < 8)))
            return false;

        Figure figure =  this.fields[row1][col1];
        if(figure == null)
            return false;

        if(this.colorGaming != figure.getColor())
            return false;

        if (figure.canMove(this.fields, row1, col1, row2, col2) && this.fields[row2][col2]==null){
            System.out.println("move");
            this.fields[row2][col2] = figure;
            this.fields[row1][col1] = null;
            return true;
        }

        if (figure.canAttack(this.fields, row1, col1, row2, col2)
            && this.fields[row2][col2] != null
            && this.fields[row2][col2].getColor() != figure.getColor())
        {
            System.out.println("attack");
            switch (this.fields[row2][col2].getColor()) {
                case 'w' -> this.takeWhite.add(this.fields[row2][col2].getColor() + this.fields[row2][col2].getName());
                case 'b' -> this.takeBlack.add(this.fields[row2][col2].getColor() + this.fields[row2][col2].getName());
            }
            this.fields[row2][col2] = figure;
            this.fields[row1][col1] = null;
            return true;
        }

        return false;
    }

    public void print_board(){
        System.out.println(" +----+----+----+----+----+----+----+----+");
        for(int row = 7; row > -1; row--){
            System.out.print(row);
            for(int col = 0; col< 8; col++){
                System.out.print("|"+getCell(row, col));
             }
            System.out.println("|");
            System.out.println(" +----+----+----+----+----+----+----+----+");
        }

        for(int col = 0; col < 8; col++)
            System.out.print("    " + col);
    }

    public boolean checkKingStatus() {
        char currentColor = this.getColorGaming();
        Figure currentKing = null;
        int positionKingX = 0;
        int positionKingY = 0;

        for(int i = 0; i < 8; i++) {
            for(int j = 0; j < 8; j++) {
                if(this.fields[i][j] == null)
                    continue;

                Figure king = this.fields[i][j];
                if(!king.getClass().getName().equals("Figures.King") || king.getColor() != currentColor)
                    continue;

                currentKing = king;
                positionKingX = j;
                positionKingY = i;
                break;
            }
        }

        for(int i = 0; i < 8; i++) {
            for(int j = 0; j < 8; j++) {
                Figure figure = this.fields[i][j];
                if(figure == null || figure.getColor() == currentColor)
                    continue;

                if(figure.canAttack(this.fields, i, j, positionKingY, positionKingX)){
                    boolean conditions = this.move_figure(positionKingY, positionKingX, positionKingY + 1, positionKingX + 1) ||
                            this.move_figure(positionKingY, positionKingX, positionKingY - 1, positionKingX - 1) ||
                            this.move_figure(positionKingY, positionKingX, positionKingY - 1, positionKingX + 1) ||
                            this.move_figure(positionKingY, positionKingX, positionKingY + 1, positionKingX - 1);

                    if(!conditions) {
                        System.out.println("Шах и мат дружище!");
                        return false;
                    }

                    System.out.println("Вам шах!");
                    return true;
                }
            }
        }

        return true;
    }
}
