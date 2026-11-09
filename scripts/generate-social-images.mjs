// Rasterizes the Open Graph graphic and derives the root icons from the official
// logo files in public/logo (the source of truth for the brand mark):
//   node scripts/generate-social-images.mjs
import sharp from 'sharp'
import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'

const publicDir = join(process.cwd(), 'public')
const logoDir = join(publicDir, 'logo')

await sharp(join(publicDir, 'og-default.svg')).png({ compressionLevel: 9 }).toFile(join(publicDir, 'og-default.png'))

for (const [from, to] of [
  ['apple-touch-icon.png', 'apple-touch-icon.png'],
  ['favicon-32.png', 'favicon-32.png'],
  ['favicon-512.png', 'icon-512.png'],
  ['favicon.ico', 'favicon.ico'],
]) {
  await copyFile(join(logoDir, from), join(publicDir, to))
}
await sharp(join(logoDir, 'favicon-512.png')).resize(192, 192).png().toFile(join(publicDir, 'icon-192.png'))

console.log('Generated og-default.png and copied icons from public/logo')
