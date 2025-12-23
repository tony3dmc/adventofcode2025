export function solve(input) {
    let rows = input.split("\n").map(r => r.trim().split(/\s+/))
    let sum = 0;

    for (let i = 0; i < rows[0].length; i++) {
        let operation = rows[rows.length - 1][i]
        let numbers = []
        for (let j = 0; j < rows.length - 1; j++) {
            numbers.push(+rows[j][i])
        }
        sum += numbers.reduce((a, c) => operation == '*' ? a * c : a + c)
    }

    return { 'answer': sum }
}
