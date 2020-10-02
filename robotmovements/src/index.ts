import { Grid } from "./grid/grid";
import { FileReader } from "./file-reader/file-reader";
import { InputValues } from "./file-reader/typings";

class Main {
  static invoke() {
    const inputList: InputValues[] = FileReader.invoke();

    for (let i = 0; i < inputList.length; i++) {
      const inputValue: InputValues = inputList[i];
      const grid = new Grid(inputValue);
      console.log(
        "Total Possible Movements:",
        Main.robotMovements(grid, inputValue.startX, inputValue.startY)
      );
    }
  }

  static robotMovements(grid: Grid, i: number, j: number): number {
    if (!grid.isMoveablePosition(i, j)) return 0;
    if (i === grid.getGridLength() - 1 && j === grid.getGridLength() - 1)
      return 1;

    grid.setGridStatus(i, j);

    const numPaths: number =
      Math.max(
        Main.robotMovements(grid, i + 1, j),
        Main.robotMovements(grid, i - 1, j),
        Main.robotMovements(grid, i, j + 1),
        Main.robotMovements(grid, i, j - 1)
      ) + 1;

    grid.setGridStatus(i, j);

    return numPaths;
  }
}

Main.invoke();
