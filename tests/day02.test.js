import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day02/part1.js'
import { solve as solvePart2 } from '../src/day02/part2.js'

test('Day 2: Gift Shop (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day02_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 1227775554)
})

test('Day 2: Gift Shop (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day02.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 24157613387)
})

test('Day 2: Gift Shop (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day02_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 4174379265)
})

test('Day 2: Gift Shop (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day02.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 33832678380)
})

