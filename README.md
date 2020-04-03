# Sudoku Solver

A simple server/client for solving sudoku puzzles.

## Server

By default the server runs on port 3001, but can be overridden by creating a dotenv file and setting a PORT variable to your chosen port.

Starting the server is as easy as running `node src/index.js`.

## Client

The url and port number of the server are set by environment variables. See `example.env` for more information.

To run the client, simply type `npm start` from within the client directory.