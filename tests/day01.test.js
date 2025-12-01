import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day01/part1.js'
import { solve as solvePart2 } from '../src/day01/part2.js'

test('Day 1: Secret entrance (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day01_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 3)
})

test('Day 1: Secret entrance (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day01.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 1048)
})

test('Day 1: Secret entrance (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day01_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 6)
})

test('Day 1: Secret entrance (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day01.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 6498)
})

