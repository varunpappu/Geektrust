import { Robot } from "../robot/robot";
import { findSum } from "../common/helpers";
import { InputValues } from "../file-reader/typings";

export class Grid {
  private row: number;
  private col: number;
  private grid: Array<Array<Robot>>;

  constructor(inputValues: InputValues) {
    this.row = inputValues.value.length;
    this.col = inputValues.value[0].length;
    this.grid = this.buildGrid(inputValues.value);
  }

  getGridLength(): number {
    return this.grid.length;
  }

  buildGrid(value: Array<Array<Value>>): Array<Array<Robot>> {
    const grid = new Array(this.row);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(this.row);
    }
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        grid[i][j] = new Robot(value[i][j]);
      }
    }

    return grid;
  }

  setGridStatus(i: number, j: number): void {
    this.grid[i][j].setVisited();
  }

  hasBeenVisited(i: number, j: number): boolean {
    if (this.isValidGrid(i, j)) {
      return this.grid[i][j].getVisited();
    }
    return false;
  }

  isPathExists(i: number, j: number): boolean {
    return (
      i < this.getGridLength() && i > -1 && j < this.getGridLength() && j > -1
    );
  }

  isValidGrid(i: number, j: number): Robot | undefined {
    return this.grid[i][j] !== undefined ? this.grid[i][j] : undefined;
  }

  isBombExist(i: number, j: number): boolean {
    if (this.isValidGrid(i, j)) {
      const sum =
        findSum(this.grid[i][j].getValue().x, 0) +
        findSum(this.grid[i][j].getValue().y, 0);
      if (sum < 23) {
        return true;
      }
    }
    return false;
  }

  isMoveablePosition(i: number, j: number): boolean {
    return (
      this.isPathExists(i, j) &&
      !this.hasBeenVisited(i, j) &&
      this.isBombExist(i, j)
    );
  }
}

interface Value {
  x: number;
  y: number;
}
