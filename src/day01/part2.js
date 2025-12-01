export function solve(input) {
    const lines = input.split("\n")

    let zero_count = 0
    let hits = 0
    let pos = 50
    for (const line of lines) {
        [pos, hits] = rotate(pos, line[0], +line.slice(1))

        zero_count += hits
    }
    return { 'answer': zero_count }
}

function rotate(pos, direction, clicks) {
    let hits = 0
    let step = direction == 'R' ? 1 : -1

    for (let i = 0; i < clicks; i++) {
        pos = (pos + step + 100) % 100
        if (pos == 0) {
            hits++
        }
    }
    return [pos, hits]
}