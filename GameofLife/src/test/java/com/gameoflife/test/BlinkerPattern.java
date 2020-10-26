package com.gameoflife.test;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Before;
import org.junit.Test;

import com.gameoflife.Board;
import com.gameoflife.GameofLife;

public class BlinkerPattern {

	private char[][] inputNumber = { { 'o', 'x', 'o', '\0', '\0', '\0', '\0', '\0' },
			{ 'o', 'x', 'o', '\0', '\0', '\0', '\0', '\0' }, { 'o', 'x', 'o', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' } };

	private char[][] expectedResult = { { 'o', 'o', 'o', '\0', '\0', '\0', '\0', '\0' },
			{ 'x', 'x', 'x', '\0', '\0', '\0', '\0', '\0' }, { 'o', 'o', 'o', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' } };

	private GameofLife gameofLife = new GameofLife();
	Board board = new Board();

	@SuppressWarnings("static-access")
	@Before
	public void initialize() {

		board.setBoard(inputNumber);
		gameofLife.main(null);

	}

	@Test
	public void blinkerPattern() {

		assertArrayEquals(expectedResult, board.getBoard());
	}
}
