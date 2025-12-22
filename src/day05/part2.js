export function solve(input) {
    const ranges = input.split("\n\n")[0].split("\n").map(x => x.split('-').map(i => +i))

    let corrected = []

    for (let range of ranges) {
        let [x, y] = range
        for (let i = 0; i < corrected.length; i++) {
            let [dx, dy] = corrected[i]

            // Scenario 1: Contained by the range
            if (x >= dx && y <= dy) {
                x = 0
                y = 0
                break
            }
            // Scenario 2: Overlaps the whole range
            if (x <= dx && y >= dy) {
                corrected[i] = [0, 0]
                continue
            }
            // Scenario 3: Overlap on the left
            if (x < dx && y >= dx && y < dy) {
                y = dx - 1
            }
            // Scenario 4: Overlap on the right
            if (x > dx && x <= dy && y > dy) {
                x = dy + 1
            }

            if (!x && !y) {
                break
            }
        }
        // Remove any zero'd from the corrected list
        corrected = corrected.filter(c => c[0] && c[1])

        // Add the new range, unless zero'd
        if (x && y) {
            corrected.push([x, y])
        }
    }

    let sum = 0
    for (let range of corrected) {
        sum += range[1] - range[0] + 1
    }

    return { 'answer': sum }
}
