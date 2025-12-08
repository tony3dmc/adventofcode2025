export function solve(input) {
    const rows = input.split("\n")
    let sum = 0

    let neighbours, neighbourCount
    for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
            if (rows[y][x] == '@') {
                neighbours = rows[y].substring(x - 1, x + 2)
                if (y > 0)
                    neighbours += rows[y - 1].substring(x - 1, x + 2)

                if (y < rows.length - 1) 
                    neighbours += rows[y + 1].substring(x - 1, x + 2)

                neighbourCount = [...neighbours].filter(x => x == '@').length - 1
                if (neighbourCount < 4)
                    sum++
            }
        }
    }

    return { 'answer': sum }
}
