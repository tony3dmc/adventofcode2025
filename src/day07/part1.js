export function solve(input) {
    let rows = input.split("\n")

    let beam_positions = new Set()
    let sum = 0;

    for (let row of rows) {
        if (!beam_positions.size) {
            beam_positions.add(row.indexOf('S'))
            continue
        }
        let splitters = indexesOf(row, '^').filter(x => beam_positions.has(x))
        if (!splitters.length) {
            continue
        }

        for (let splitter of splitters) {
            if (!beam_positions.has(splitter - 1)) {
                beam_positions.add(splitter - 1)
            }
            if (!beam_positions.has(splitter + 1)) {
                beam_positions.add(splitter + 1)
            }
            sum++
            beam_positions.delete(splitter)
        }

    }

    return { 'answer': sum }
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