# React_Interview_Solutions
Solutions to some common React Interview Questions

Each branch indicates a certain pattern or approach towards solving a particular problem. Some ways have permormance advantages over others. Some are more strict in terms of type safety over others etc.

Here, you can find the updated list of branches and the problem we're solving in each branch.

Problem 1: Display a list of pokemon in a dropdown from "https://pokeapi.co/api/v2/pokemon" and on selection of any of the pokemon, make another api call to fetch and display the list of its abilities. Note: The url to get abilities of a pokemon is unique and is provided in response to the first api call.

1. master-slave Branch:

This is an approach where the stateful function act as a master and holds entire state and controls the slave or stateless functions to render the required results.

Code Sandbox link for uick access: https://codesandbox.io/s/pokemon-react-master-slave-pattern-neszw3