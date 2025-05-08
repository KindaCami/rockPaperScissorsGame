
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper' && userInput !== 'bomb'){
    console.log('Error! You only can play rock, scissors, paper or bomb');
  } else {
     return userInput;
  }
}

const computerChoiceArray = ['rock', 'scissors', 'paper'];
const getComputerChoice = () => {
 return computerChoiceArray[Math.floor(Math.random()  * computerChoiceArray.length)];
} 

// The next function is a poor but correct way to do the same with computerChoice
/*const getComputerChoice = () => {
let wholeNumber = Math.floor(Math.random() * 3);
if (wholeNumber === 0 ){
  return 'scissors'
} else if (wholeNumber === 1){
  return 'paper'
} else {
  return 'rock'
}
} */

/*
const determineAWinner = (userChoice, computerChoice) => {
 if (userChoice === computerChoice){
   return 'Its a tie'
 } 
 if (userChoice === 'bomb') { 
    return 'User used a BOMB and won spectacularly!';
} else if (userChoice === 'rock' && computerChoice === 'paper') {
  return 'computer won!'
 } else if (userChoice === 'paper' && computerChoice === 'scissors'){
  return 'computer won!'
 } else if (userChoice === 'scissors' && computerChoice === 'rock') {
  return 'computer won!'
 } else {
  return 'user won!'
 }
} */

// A better way to write the determineAWinner function creating an object with the possible combinations:
const determineAWinner = (userChoice, computerChoice) => {
    // First, check for a tie
    if (userChoice === computerChoice) {
      return "It's a tie";
    }
    if (userChoice === 'bomb') {
      return 'User used a BOMB and won spectacularly!';
    }
  
    // This object defines what computer move would beat the user's choice
    // Key: user's choice || Value: computer's choice that beats the user's choice
    const whatBeatsUserChoice = {
      rock: 'paper',     // If user plays 'rock', 'paper' from computer wins
      paper: 'scissors', // If user plays 'paper', 'scissors' from computer wins
      scissors: 'rock'   // If user plays 'scissors', 'rock' from computer wins
    };
  
    // If the computer played the move that beats the user's choice, computer wins
    if (whatBeatsUserChoice[userChoice] === computerChoice) {
      return 'computer won!';
    } else {
      // Otherwise (and it's not a tie), the user must have won.
      // This also covers cases like when userChoice is 'bomb', 
      // because 'bomb' is not a key in whatBeatsUserChoice,
      // so whatBeatsUserChoice[userChoice] would be undefined,
      // making the 'if' condition false, and thus 'user won!'.
      return 'user won!';
    }
  };




 const playGame = () => {
 let userChoice = getUserChoice('bomb');
 if (!userChoice) {
    console.log('Error! You only can play rock, scissors, paper or bomb');
   return;
 }
 let computerChoice = getComputerChoice();
 console.log(`You threw: ${userChoice}!`);
 console.log(`computer threw: ${computerChoice}!`);
 console.log(determineAWinner(userChoice, computerChoice));
 }

playGame()
