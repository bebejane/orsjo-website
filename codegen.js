const filePath = './@types/datocms.d.ts'
const filePathDocument = './graphql/index.ts'
const fs = require('fs')
const includeMeta = [
  '__typename',
  '_modelApiKey'
]

const lines = fs.readFileSync(filePath, 'utf8').split('\n')

const content = []

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if(line.startsWith('  _')){
    const prop = line.substring(2, line.indexOf(':')).replace(/\?/g, '')
    if(includeMeta.indexOf(prop) === -1) // Exclude meta tags
      continue;
  }
  content.push(line)
}
fs.writeFileSync(filePath, content.join('\n'))
fs.writeFileSync(filePathDocument, '// @ts-nocheck\n' + fs.readFileSync(filePathDocument, 'utf8'))