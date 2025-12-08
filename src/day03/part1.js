export function solve(input) {
    const banks = input.split("\n")

    let sum = 0, max, current
    for (const bank of banks) {
        max = 0
        for (let i = 0; i < bank.length - 1; i++) {
            for (let j = i + 1; j < bank.length; j++) {
                current = +(bank[i] + bank[j])
                if (current > max) {
                    max = current
                }
            }
        }
        sum += max
    }

    return { 'answer': sum }
}