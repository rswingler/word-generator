import {readTextFile} from './FileReader';
import {generateWords} from './WordGen';

/**
 * Word generator test suite
 * - Some simple tests around initial project assumptions
 */
describe("Word Generator", () => {

  it("Should meet initial example prompt", () => {
    const input = "oogd";
    const dictionary = ["good", "god", "dog", "goo", "do", "go"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should meet initial example prompt with full dictionary", async () => {
    const input = "oogd";
    const dictionary = await readTextFile("dictionary.txt");
    const words = generateWords(input, dictionary);
    expect(words).toEqual([
      "D",
      "DG",
      "DO",
      "dog",
      "doo",
      "G",
      "GD",
      "GO",
      "God",
      "goo",
      "Good",
      "o",
      "OD",
      "Odo",
      "OG",
      "OGO",
      "OO",
      "",
    ]);
  });

  it("Should handle empty input", () => {
    const input = "";
    const dictionary = ["good", "god", "dog", "goo", "do", "go"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual([]);
  });

  it("Should handle empty dictionary", () => {
    const input = "oogd";
    const dictionary = [];
    const words = generateWords(input, dictionary);
    expect(words).toEqual([]);
  });

  it("Should handle single-letter words", () => {
    const input = "abi";
    const dictionary = ["a", "I"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle case insensitivity", () => {
    const input = "oOgD";
    const dictionary = ["Good", "God", "Dog", "Goo", "Do", "Go"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle alphanumeric inputs and outputs", () => {
    const input = "dn2";
    const dictionary = ["2nd", "2D", "2"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle special characters", () => {
    const input = "t&aatckamm";
    const dictionary = ["AT&T", "M&M", "attack", "tack", "tat"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle diacritical marks", () => {
    const input = "nocéeby";
    const dictionary = ["Beyoncé"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should allow duplicate output chars from duplicate input chars", () => {
    const input = "eettmmico";
    const dictionary = ["committee"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should not allow duplicate output chars not found in the input", () => {
    const input = "kob";
    const dictionary = ["book"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual([]);
  });

  it("Should provide words with equal or fewer duplicate chars than the input", () => {
    const input = "cehse";
    const dictionary = ["cheese", "see"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(["see"]);
  });

  it("Should handle dashed words", () => {
    const input = "edlionheart-";
    const dictionary = [
      "lion-hearted",
      "lion-heart",
      "delineator",
      "headliner",
      "lion",
      "heart",
      "heal",
      "he",
    ];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle compound words with spaces", () => {
    const input = "dt oogh";
    const dictionary = ["hot dog"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });

  it("Should handle acronyms", () => {
    const input = "nsaa";
    const dictionary = ["NASA"];
    const words = generateWords(input, dictionary);
    expect(words).toEqual(dictionary);
  });
});
