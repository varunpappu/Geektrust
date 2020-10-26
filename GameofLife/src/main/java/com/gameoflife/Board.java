package com.gameoflife;


/**
 * The Board class implements a simple Getter and Setter
 * method for accessing the board.
 * 
 * @author Varun.N.S
 * @version 1.0
 * 
 */
public class Board {

	private static char[][] board;

	public char[][] getBoard() {
		return board;
	}

	@SuppressWarnings("static-access")
	public void setBoard(char[][] board) {
		this.board = board;
	}

}
