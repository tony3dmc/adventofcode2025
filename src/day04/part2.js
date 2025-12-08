export function solve(input) {
    let rows = input.split("\n")
    let sum = 0

    let neighbours, neighbourCount, foundThisTime
    do {
        foundThisTime = 0
        for (let y = 0; y < rows.length; y++) {
            for (let x = 0; x < rows[y].length; x++) {
                if (rows[y][x] == '@') {
                    neighbours = rows[y].substring(x - 1, x + 2)
                    if (y > 0)
                        neighbours += rows[y - 1].substring(x - 1, x + 2)

                    if (y < rows.length - 1) 
                        neighbours += rows[y + 1].substring(x - 1, x + 2)

                    neighbourCount = [...neighbours].filter(c => c == '@').length - 1
                    if (neighbourCount < 4) {
                        sum++
                        foundThisTime++
                        rows[y] = rows[y].substring(0, x) + "." + rows[y].substring(x + 1, rows[y].length)
                    }
                }
            }
        }
    } while (foundThisTime > 0)

    return { 'answer': sum }
}
