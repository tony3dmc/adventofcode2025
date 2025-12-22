export function solve(input) {
    let [ranges, ingredients] = input.split("\n\n")
    ranges = ranges.split("\n").map(x => x.split('-').map(i => +i))
    ingredients = ingredients.split("\n").map(i => +i)

    let sum = 0

    for (let ingredient of ingredients) {
        for (let range of ranges) {
            if (ingredient >= range[0] && ingredient <= range[1]) {
                sum++
                break
            }
        }
    }

    return { 'answer': sum }
}
