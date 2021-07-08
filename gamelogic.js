function displayWordSoFar(word, guesses) {
  let string = "";

  const array = word.split("");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (guesses.includes(array[i])) {
      string += array[i] + " ";
    } else string += "_ ";
  }
  console.log(string);
  return string

//  * Hoe kan ik iedere letter afzonderlijk bekijken
//  * Hoe kan ik automatisch over alle letters van het woord itereren
//  * Zit deze letter in de guesses array, zo ja print letter zelf
//  * Anders underscore


function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
