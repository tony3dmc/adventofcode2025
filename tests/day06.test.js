import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day06/part1.js'
import { solve as solvePart2 } from '../src/day06/part2.js'

test('Day 6: Trash Compactor (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day06_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 4277556)
})

test('Day 6: Trash Compactor (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day06.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 6171290547579)
})

test('Day 6: Trash Compactor (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day06_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 3263827)
})

test('Day 6: Trash Compactor (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day06.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 8811937976367)
})

