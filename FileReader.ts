import * as fs from "fs/promises";
import * as path from "path";

/**
 * Read the lines in a file and return the contents as a string array
 * @param {string} fileName
 * @returns {Promise<string[]>}
 */
export async function readTextFile(fileName: string): Promise<string[]> {
  try {
    const data = await fs.readFile(path.join(__dirname, fileName), "utf8");
    return data.split(/\r?\n/); // Split the file on new lines
  } catch (error) {
    console.error("Error reading file:", error);
  }
  return [];
}
