export function solve(input) {
    let rows = input.split("\n")

    let sum = 0;
    let operation = ''
    let numbers = []
    for (let i = 0; i < rows[0].length; i++) {
        if (!operation) {
            operation = rows[rows.length - 1][i]
        }
        let col = ''
        for (let j = 0; j < rows.length - 1; j++) {
            col += rows[j][i]
        }
        if (col.trim()) {
            numbers.push(+col)
        }

        if (!col.trim() || i == rows[0].length - 1) {
            sum += numbers.reduce((a, c) => operation == '*' ? a * c : a + c)

            numbers = []
            operation = ''
        }
    }

    return { 'answer': sum }
}
