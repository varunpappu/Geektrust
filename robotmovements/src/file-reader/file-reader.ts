import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";
import { InputValues } from "./typings";
const entryPaths = glob.sync(path.join(__dirname, "../assets/*"));

export class FileReader {
  static invoke(): InputValues[] {
    const inputList: InputValues[] = [];

    for (let i = 0; i < entryPaths.length; i++) {
      const parsedPath = path.parse(entryPaths[i]);
      if (parsedPath.ext === ".json") {
        const textValues = fs.readFileSync(
          path.join(__dirname, `../assets/${parsedPath.base}`),
          "utf8"
        );
        inputList.push(JSON.parse(textValues));
      }
    }

    return inputList;
  }
}

FileReader.invoke();
