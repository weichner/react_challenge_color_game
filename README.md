# Color Guessing Game

This is a simple color guessing game built with React.

## Overview

In this game, a color is randomly selected and displayed on the screen. The player is then presented with three color options, one of which matches the displayed color. The player's task is to guess which of the three options is the correct one.

## How It Works

The game uses React's useState and useEffect hooks to manage the game state and lifecycle. The color to be guessed and the color options are stored in state variables, and a useEffect hook is used to generate a new set of colors whenever the game starts or the player makes a correct guess.

The game uses a helper function, `getRandomColor`, to generate random colors. This function is defined in a separate utility module.

When a player selects a color, the game checks if the selected color matches the color to be guessed. If the guess is correct, the game generates a new set of colors and the player can continue playing. If the guess is wrong, the game displays a message to let the player know.

## How to Run

To run the game, follow these steps:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the game with `npm start`

Enjoy the game! 🚀🚀🚀