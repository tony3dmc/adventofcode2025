export function solve(input) {
    const rows = input.split("\n")

    // Instead of storing full timelines, we're going to store the number of
    // timelines that are currently at each position. Then when we split, we're
    // just going to add that number to the left and right spaces, removing the
    // current one.
    // At the end, we'll just sum the timelines that ended at each space.
    const timelines = new Map()

    for (let row of rows) {
        if (!timelines.size) {
            timelines.set(row.indexOf('S'), 1)
            continue
        }
        let splitters = indexesOf(row, '^').filter(x => timelines.has(x))
        if (!splitters.length) {
            continue
        }

        for (let splitter of splitters) {
            timelines.set(splitter - 1, (timelines.get(splitter - 1) ?? 0) + timelines.get(splitter))
            timelines.set(splitter + 1, (timelines.get(splitter + 1) ?? 0) + timelines.get(splitter))
            timelines.delete(splitter)
        }

    }

    return { 'answer': [...timelines.values()].reduce((a, c) => a + c) }
}

function indexesOf(string, substring) {
    const indexes = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] == substring) {
            indexes.push(i)
        }
    }
    return indexes
}