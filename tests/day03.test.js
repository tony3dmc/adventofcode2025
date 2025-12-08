import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day03/part1.js'
import { solve as solvePart2 } from '../src/day03/part2.js'

test('Day 3: Lobby (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day03_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 357)
})

test('Day 3: Lobby (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day03.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 17321)
})

// test('Day 3: Lobby (part 2) - Sample Input', async() => {
//     const input = await readFile('inputs/day03_sample.txt', 'utf8')
//     const result = await solvePart2(input)
//     assert.strictEqual(result.answer, 3121910778619)
// })

// test('Day 3: Lobby (part 2) - Full Input', async() => {
//     const input = await readFile('inputs/day03.txt', 'utf8')
//     const result = await solvePart2(input)
//     assert.strictEqual(result.answer, 0)
// })

