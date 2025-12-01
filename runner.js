import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const [, , day, part, mode = 'full'] = process.argv

if (!day || !part) {
  console.error('Usage: npm run solve <dayXX> <partX> [sample|full]')
  process.exit(1)
}

// Ensure our day/part file exists
const fsPath = path.join('src', day, `${part}.js`)
if (!existsSync(fsPath)) {
  console.error(`! No file found at: ${fsPath}`)
  process.exit(1)
}

const inputFilename = path.join(
  'inputs',
  `${day}${mode === 'sample' ? '_sample' : ''}.txt`
)

let input
try {
  input = await readFile(inputFilename, 'utf8')
} catch (err) {
  console.error(`! Failed to read input file: ${inputFilename}`)
  console.error(err.message)
  process.exit(1)
}

const moduleUrl = pathToFileURL(path.resolve(fsPath)).href

let solve
try {
  const mod = await import(moduleUrl)
  solve = mod.solve
} catch (err) {
  console.error(`! Failed to import module at: ${fsPath}`)
  console.error(err)
  process.exit(1)
}

if (typeof solve !== 'function') {
  console.error(`! Module ${fsPath} does not export a 'solve' function`)
  process.exit(1)
}

try {
  const answer = await solve(input)
  console.log(answer)
} catch (err) {
  console.error('! Error while running solve():')
  console.error(err)
  process.exit(1)
}
