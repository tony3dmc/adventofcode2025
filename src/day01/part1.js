export function solve(input) {
    const lines = input.split("\n")

    let zero_count = 0
    let pos = 50
    for (const line of lines) {
        pos = rotate(pos, line[0], +line.slice(1))

        if (pos == 0) {
            zero_count++
        }
    }
    return { 'answer': zero_count }
}

function rotate(pos, direction, clicks) {
    if (direction == 'R') {
        pos = (pos + clicks) % 100
    } else {
        pos = (pos - clicks) % 100
    }
    if (pos < 0) {
        pos += 100
    }
    return pos
}