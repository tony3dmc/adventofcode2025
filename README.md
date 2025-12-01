# Advent of Code 2025

This repo contains my solutions for the Advent of Code 2025 challenge. This year, I'm using Javascript for my solutions.

## Project Structure

```
adventofcode2025/
  inputs/
    day01.txt          // The full input data for the puzzle
    day01_sample.txt   // Sample data from the puzzle description to test with
    ...
  src/
    day01/
      part1.js         // Solution for part 1 of day 1
      part2.js         // Solution for part 2 of day 1
    ...
  runner.js            // Wrapper script to keep our solutions clean and simple
```

## How to Run

```
npm run solve <day> <part> [sample]
```

For example...

```
npm run solve day01 part1 sample
```

We also have a linter configured with some basic rules to keep our code clean:

```
npm run lint
```
