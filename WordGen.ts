import {readTextFile} from './FileReader';

async function startWordGen(): Promise<void> {
  const input = "oogd";
  const dictionary = await readTextFile("dictionary.txt");
  const output = generateWords(input, dictionary);
  console.log(`Input: ${input}`);
  console.log(`Output: ${output}`);
}

/**
 * Return a list of english words that can only be constructed using letters from an input string
 * - Enforces the input and all dictionary words to be lower case
 * @param {string} input
 * @param {string[]} dictionary
 * @returns {string[]}
 */
export function generateWords(input: string, dictionary: string[]): string[] {
  // Filter the dictionary for valid words to include in the output
  const lowerCaseInput = input.toLowerCase();
  return dictionary.filter((word) =>
    isValidWord(word.toLowerCase(), lowerCaseInput),
  );
}

/**
 * A valid word meets the following requirements:
 * - May only contain chars from the input (one or more)
 * - May only contain one instance of each input char (assume duplicate chars are allowed if provided via input)
 * @param {string} dictionaryWord
 * @param {string} input
 * @returns {boolean}
 */
function isValidWord(dictionaryWord: string, input: string): boolean {
  // Iterate over the dictionary word chars and check against the input chars for usage
  // Assume each input char can only be used once (duplicates derived from the input are allowed)
  let inputSplit = input.split("");
  for (const char of dictionaryWord) {
    const index = inputSplit.indexOf(char);
    if (index === -1) {
      return false;
    }
    inputSplit.splice(index, 1); // Remove the used character from the array
  }

  return true; // Return true if all checks succeed
}

startWordGen();
