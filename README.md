🔴 Live Demo: https://seholevas.github.io/PathFindingVisualizer/

Project Name: Path Finding Visualizer

This project was created in order to allow for the visualization of path finding algorithms. Path finding algorithms are commonly used to create the most efficient path from one place to another. This is commonly applied in ride-shared apps such as Uber or Lyft, and GPS' based apps such as Google Maps or Waze.


Prerequisites:

Before you continue, ensure you have met the following requirments:
* You have node js and npm installed
* You have the latest version of React installed
* You have the latest version of Redux installed
* You have a basic understanding of adjacency matrix graph theory
* You have a basic understanding of React/Redux

How To Install:
Download the package by clicking the download button.

How To Use:
* Once installed and extracted, you will want to use command-line to use the command npm start.
* After npm start, you will want to go to your localhost:3000/ to get started.
* Go through the tutorial pages to understand what the project does and what each icon does.
* Decorate the grid with items to make it a bit harder for the algorithm to get to the end point.
* Press Start to begin the algorithm.

Problems I Faced While Creating:
* grid.js: had a problem iterating through the 2d array properly with the map function.
* 2d arrays: cannot simply create a shallow copy with [...array] shallow copies with objects
* controls.js: if the select-box has a "selected default" that is "disabled" the start_coordinates will be = [], which will throw an error.

