import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day05/part1.js'
import { solve as solvePart2 } from '../src/day05/part2.js'

test('Day 5: Cafeteria (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day05_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 3)
})

test('Day 5: Cafeteria (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day05.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 664)
})

test('Day 5: Cafeteria (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day05_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 14)
})

test('Day 5: Cafeteria (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day05.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 350780324308385)
})

