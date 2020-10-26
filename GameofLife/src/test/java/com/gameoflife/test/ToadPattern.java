package com.gameoflife.test;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Before;
import org.junit.Test;

import com.gameoflife.Board;
import com.gameoflife.GameofLife;



public class ToadPattern {

	private char[][] inputNumber = { { 'o', 'x', 'x', 'x', '\0', '\0', '\0', '\0' },
			{ 'x', 'x', 'x', 'o', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' } };

	private char[][] expectedResult = { { 'x', 'o', 'o', 'x', '\0', '\0', '\0', '\0' },
			{ 'x', 'o', 'o', 'x', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' } };

	private GameofLife gameofLife = new GameofLife();
	private Board board = new Board();

	@SuppressWarnings("static-access")
	@Before
	public void initialize() {

		board.setBoard(inputNumber);
		gameofLife.main(null);

	}

	@Test
	public void toadPattern() {

		assertArrayEquals(expectedResult, board.getBoard());
	}
}
