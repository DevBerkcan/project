import sharp from 'sharp'
import { statSync } from 'node:fs'
import { join } from 'node:path'

const publicDir = join(process.cwd(), 'public')
const targets = ['berk-can_founder.png', 'medin_co-founder.png', 'alanur_backoffice.png']

async function optimize(filename) {
  const inputPath = join(publicDir, filename)
  const outputPath = join(publicDir, filename.replace(/\.png$/, '.webp'))
  const before = statSync(inputPath).size

  await sharp(inputPath)
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath)

  const after = statSync(outputPath).size
  console.log(`${filename} -> ${outputPath.split(/[\\/]/).pop()}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`)
}

for (const file of targets) {
  await optimize(file)
}
