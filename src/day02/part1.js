export function solve(input) {
    const ranges = input.split(",").map(r => r.split('-'))
    let str
    let invalid_total = 0
    for (const range of ranges) {
        for (let i = +range[0]; i <= +range[1]; i++) {
            str = ""+i

            if (str.slice(0, str.length / 2) == str.slice(str.length / 2)) {
                invalid_total += +str
            }
            
        }
    }

    return { 'answer': invalid_total }
}