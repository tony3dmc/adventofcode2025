export function solve(input) {
    let rows = input.split("\n")

    let circuits = []

    let objects = rows.map(r => r.split(','))
    let distances = []

    for (let i = 0; i < objects.length; i++) {
        const obj1 = objects[i]
        circuits.push(new Set().add(obj1.join(',')))
        for (let j = i + 1; j < objects.length; j++) {
            const obj2 = objects[j]
            if (obj1 != obj2) {
                distances.push([obj1.join(','), obj2.join(','), distance(obj1, obj2)])
            }
        }
    }

    // The sample only needs to connect 10 of them, but we need all 1000 of the full input
    const connections = rows.length <= 20 ? 10 : 1000

    const links = distances.sort((a,b) => a[2] - b[2])

    for (const link of links) {
        let found = false
        for (let i = 0; i < circuits.length; i++) {
            if (circuits[i].has(link[0]) || circuits[i].has(link[1])) {
                if (found === false) {
                    circuits[i].add(link[0])
                    circuits[i].add(link[1])
                    found = i
                } else {
                    circuits[i] = new Set([...circuits[i], ...circuits[found]])
                    if (circuits[i].size == rows.length) {
                        // We have a single circuit the same size as our input rows!
                        return { 'answer': link[0].split(',')[0] * link[1].split(',')[0] }
                    }
                    circuits[found] = new Set()
                }
            }
        }

        if (!found) {
            let circuit = new Set()
            circuit.add(link[0])
            circuit.add(link[1])
            circuits.push(circuit)
        }
        circuits = circuits.filter(x => x.size).sort((a,b) => b.size - a.size)
    }
    console.log(circuits)
    
    return { 'answer': circuits.slice(0, 3).map(x => x.size).reduce((a,c) => a * c) }
}

function distance(obj1, obj2) {
    return Math.sqrt(
        Math.pow(obj2[0] - obj1[0], 2) + 
        Math.pow(obj2[1] - obj1[1], 2) + 
        Math.pow(obj2[2] - obj1[2], 2)
    )
}