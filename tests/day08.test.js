import { test } from 'node:test'
import assert from 'node:assert'
import { readFile } from 'node:fs/promises'
import { solve as solvePart1 } from '../src/day08/part1.js'
import { solve as solvePart2 } from '../src/day08/part2.js'

test('Day 8: Playground (part 1) - Sample Input', async() => {
    const input = await readFile('inputs/day08_sample.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 40)
})

test('Day 8: Playground (part 1) - Full Input', async() => {
    const input = await readFile('inputs/day08.txt', 'utf8')
    const result = await solvePart1(input)
    assert.strictEqual(result.answer, 330786)
})

test('Day 8: Playground (part 2) - Sample Input', async() => {
    const input = await readFile('inputs/day08_sample.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 25272)
})

test('Day 8: Playground (part 2) - Full Input', async() => {
    const input = await readFile('inputs/day08.txt', 'utf8')
    const result = await solvePart2(input)
    assert.strictEqual(result.answer, 3276581616)
})

