# Word Generator

### Getting started
- Install dependencies: `npm install`
- Build: `npm run build`
- Test suite: `npm run test`
- Call `generateWords()` with an input string and dictionary file
- Execute `startWordGen()` to use the default dictionary file with a simple example

### Requirements:
- Given an input string of arbitrary characters and an array of English words
- Return a string array of all words equal to or less than the length of the input string
- Returned words must only include chars found in the input string
- Returned words can contain only one instance of each input char or less (duplicate output chars are dictated by duplicate input chars)

### Initial example:
- Input "oogd" should produce ["good", "god", "dog", "goo", "do", "go"] (depending on the dictionary file being used)

### Considerations:
- Inputs are treated as case-insensitive

### Test suite:
- Some simple tests around basic usage - to be augmented as requirements change

### With more time we could
- Allow for more user configuration (case sensitivity)
- Allow for more complex word constructions


