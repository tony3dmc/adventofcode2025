import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day04/part1.js'
import { solve as solvePart2 } from '../src/day04/part2.js'

test('Day 4: Printing Department (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day04_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 13)
})

test('Day 4: Printing Department (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day04.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 1464)
})

test('Day 4: Printing Department (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day04_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 43)
})

test('Day 4: Printing Department (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day04.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 8409)
})

