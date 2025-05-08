# Game: Rock, Paper, Scissors in JavaScript

A simple JavaScript script that lets you play the classic game of Rock, Paper, Scissors against the computer. It includes a secret "bomb" option!

## How to Play

1.  **Choose Your Move:**
    * Inside the `playGame()` function, modify the value passed to `getUserChoice()`. You can choose between `'rock'`, `'paper'`, `'scissors'`, or the trick `'bomb'`.
    ```javascript
    // Inside the playGame() function:
    let userChoice = getUserChoice('paper'); // Change 'paper' to your choice
    ```

2.  **Run the Script:**
    * Open and run the `.js` file in a JavaScript environment (e.g., using Node.js in your terminal or by pasting it into your web browser's developer console).
    ```bash
    # Example if using Node.js:
    node your_file_name.js
    ```

3.  **See the Outcome:**
    * The console will display your move, the computer's move, and who won the round, or if it was a tie.

## Features

* Allows the player to choose between "rock", "paper", or "scissors".
* Includes a special "bomb" option that beats standard choices.
* The computer makes its choice randomly.
* Determines and announces the winner of each round or if it's a tie.
* Contains basic validation for the player's input.

## Code Structure

The script is organized into several main functions:

* `getUserChoice(userInput)`: Takes the player's input, converts it to lowercase, and validates it. Returns the choice if valid, or logs an error and returns `undefined`.
* `getComputerChoice()`: Generates and returns the computer's random choice (`rock`, `paper`, or `scissors`).
* `determineAWinner(userChoice, computerChoice)`: Compares the two choices and returns a string indicating the result (tie, user wins, or computer wins).
* `playGame()`: Orchestrates a round of the game: gets the choices, displays them, and announces the winner.

This project is a good exercise for practicing conditional logic, functions, and generating random elements in JavaScript.
