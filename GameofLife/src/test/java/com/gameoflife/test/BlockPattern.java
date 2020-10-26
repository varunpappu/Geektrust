package com.gameoflife.test;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Before;
import org.junit.Test;

import com.gameoflife.Board;
import com.gameoflife.GameofLife;

public class BlockPattern {

	private char[][] inputNumber = { { 'x', 'x', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ 'x', 'x', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' } };

	private char[][] expectedResult = { { 'x', 'x', '\0', '\0', '\0', '\0', '\0', '\0' },
			{ 'x', 'x', '\0', '\0', '\0', '\0', '\0', '\0' }, { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' },
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
	public void blockPattern() {

		assertArrayEquals(expectedResult, board.getBoard());
	}
}
