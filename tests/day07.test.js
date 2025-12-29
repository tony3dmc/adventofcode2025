import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day07/part1.js'
import { solve as solvePart2 } from '../src/day07/part2.js'

test('Day 7: Laboratories (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day07_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 21)
})

test('Day 7: Laboratories (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day07.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 1633)
})

test('Day 7: Laboratories (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day07_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 40)
})

test('Day 7: Laboratories (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day07.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 34339203133559)
})

