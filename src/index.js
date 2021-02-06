import { promises as fs } from "fs";
import { removeRepeatedValues } from "./util/removeRepeatedValues";

const main = async (arg1) => {
  if (arg1 !== undefined) {
    console.log(`Received "${arg1}"`);
  }
  console.log(removeRepeatedValues([5, 9, 3, 3, 7]));
  const text = await fs.readFile("package.json", "utf-8");
  console.log(text);
};

main.apply(undefined, process.argv.slice(2));
