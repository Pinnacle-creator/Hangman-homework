const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // Every round, check how we are doing
  console.log(displayWordSoFar(word, guesses))
  if(isGameWon(word, guesses)) return console.log('OMG YOU HAVE WONN!!!!111!!')
  if(isGameLost(word, guesses)) return console.log('YOU. ARE. A .LOSER. PERIOD.')

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}
console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
