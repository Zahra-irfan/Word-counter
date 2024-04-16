#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "sentence",
    type: "string",
    message:
      "Please enter a sentence of which you want the characters and words to be counted: ",
  },
]);
if (answer.sentence.length > 0) {
  let functions = await inquirer.prompt([
    {
      name: "count",
      type: "list",
      message: "What do you wish to count?",
      choices: ["Words", "Characters", "Characters with spaces", "All"],
    },
  ]);

  if (functions.count === "Words") {
    const words = answer.sentence.trim().split(" ");
    // console.log(words);
    console.log(
      `Total number of words in the given sentence is: "${words.length}".`
    );
  } else if (functions.count === "Characters") {
    const characters = answer.sentence.replace(/\s/g, "").split("");
    // console.log(characters);
    console.log(
      `Total number of characters in the given sentence is: "${characters.length}".`
    );
  } else if (functions.count === "Characters with spaces") {
    const charactersWithSpaces = answer.sentence.trim().split("");
    // console.log(charactersWithSpaces)
    console.log(
      `Total number of characters with spaces in the given sentence is: "${charactersWithSpaces.length}".`
    );
  } else {
    const words = answer.sentence.trim().split(" ");
    // console.log(words);
    console.log(
      `Total number of words in the given sentence is: "${words.length}".`
    );
    const characters = answer.sentence.replace(/\s/g, "").split("");
    // console.log(characters);
    console.log(
      `Total number of characters in the given sentence is: "${characters.length}".`
    );
    const charactersWithSpaces = answer.sentence.trim().split("");
    // console.log(charactersWithSpaces)
    console.log(
      `Total number of characters with spaces in the given sentence is: "${charactersWithSpaces.length}".`
    );
  }
} else {
  console.log(
    "Error!\nYou can't add an empty input.\nPLease enter a sentence."
  );
}
