export function solve(input) {
    const ranges = input.split(",").map(r => r.split('-'))
    let str
    let invalid_total = 0

    // Pregenerate a set of factors to use for chunking
    const factors = generateFactors(20)

    for (const range of ranges) {
        for (let i = +range[0]; i <= +range[1]; i++) {
            str = ""+i

            for (const factor of factors[str.length]) {
                // Converting to a Set and back to unique-ify the list
                if ([...new Set(chunk(str, factor))].length == 1) {
                    invalid_total += +str

                    // Need to break, "2222" is invalid two different ways
                    break
                }
            }
            
        }
    }

    return { 'answer': invalid_total }
}

function generateFactors(max) {
    let lookup = {}
    for (let i = 1; i <= max; i++) {
        lookup[i] = factor(i)
    }
    return lookup
}

function factor(num) {
    let factors = []
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    return factors
}

function chunk(str, len) {
    let chunks = []
    for (let i = 0; i < str.length; i += len) {
        chunks.push(str.substring(i, i + len))
    }
    return chunks
}