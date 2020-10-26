package com.gameoflife;

/**
 * The GameofLife program implements an application that works according to
 * Conways methodologies and performs the following four functionalities: 1) Any
 * live cell with fewer than two live neighbors dies, as if by loneliness. 2)
 * Any live cell with more than three live neighbors dies, as if by
 * overcrowding. 3) Any live cell with two or three live neighbors lives,
 * unchanged, to the next generation. 4) Any dead cell with exactly three live
 * neighbors comes to life.
 * 
 * @author Varun.N.S
 * @version 1.0
 *
 */
public class GameofLife {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		// Initializing the board class
		Board b = new Board();

		// Creation of a char[][] array that holds the board pattern
		char[][] boardArray = b.getBoard();

		// Creating a char[][] array that holds the backup of the board
		char[][] backupBoard = createBackup(boardArray);

		// Looping through the two dimensional array to check for the
		// conditions of the GameofLife
		for (int i = 0; i < backupBoard.length; i++) {
			for (int j = 0; j < backupBoard[i].length; j++) {
				// Condition 1: To Check if an ali
				if (backupBoard[i][j] == 'x'
						&& (checkSurrounding(backupBoard, i, j) < 2 || checkSurrounding(backupBoard, i, j) > 3)) {
					boardArray[i][j] = 'o';
				} else if (backupBoard[i][j] == 'x'
						&& (checkSurrounding(backupBoard, i, j) == 2 || checkSurrounding(backupBoard, i, j) == 3)) {
					boardArray[i][j] = 'x';
				} else if (backupBoard[i][j] == 'o' && checkSurrounding(backupBoard, i, j) == 3) {
					boardArray[i][j] = 'x';
				}
			}
		}

		// Setting the resultant board value
		b.setBoard(boardArray);

	}

	/**
	 * @param board
	 * @param i
	 * @param j
	 * @return count
	 */
	public static int checkSurrounding(char[][] backupBoard, int i, int j) {
		// Initializing the count variable
		int count = 0;

		// Initializing a two dimensional array for verifying all possible
		// neighbors for a dimension
		int[][] neighbours = { { i - 1, j - 1 }, { i - 1, j }, { i - 1, j + 1 }, { i, j - 1 }, { i, j + 1 },
				{ i + 1, j - 1 }, { i + 1, j }, { i + 1, j + 1 } };

		// For Loop to check against if a neighbor exists or not
		for (int row[] : neighbours) {
			try {
				if (backupBoard[row[0]][row[1]] == 'x') {
					count++;
				}
			} catch (ArrayIndexOutOfBoundsException e) {

			}
		}
		return count;
	}

	/**
	 * @param array
	 */
	public static void displayArray(char[][] array) {

		// Displaying the two dimensional array by FOR looping each element
		for (int i = 0; i < array.length; i++) {
			for (int j = 0; j < array[i].length; j++) {
				System.out.print(array[i][j] + " ");
			}
			System.out.println();
		}
	}

	/**
	 * @param boardArray
	 * @return char[][] backupBoard
	 */
	public static char[][] createBackup(char[][] boardArray) {

		char[][] backupBoard = new char[boardArray.length][boardArray[0].length];

		// Creating a copy of the boardArray to backupBoard
		for (int i = 0; i < boardArray.length; i++) {
			for (int j = 0; j < boardArray[i].length; j++) {
				backupBoard[i][j] = boardArray[i][j];
			}
		}
		return backupBoard;
	}
}