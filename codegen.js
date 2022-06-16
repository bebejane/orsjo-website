const filePath = './types/datocms.d.ts'
const fs = require('fs')
const includeMeta = [
'__typename',
'_modelApiKey'
]

const lines = fs.readFileSync(filePath, 'utf8')
.replace(/export /g, '')
.replace(/Record/g, '')
.replace('type Maybe<T> = T | null;', 'type Maybe<T> = T;')
.split('\n')
const content = []


for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if(line.includes('*')) continue
  if(line.startsWith('  _')){
    const prop = line.substring(2, line.indexOf(':')).replace(/\?/g, '')
    if(includeMeta.indexOf(prop) === -1)
      continue;
  }
  //line = line.replace(/\?\:/g, ':') // Remove optional params
  content.push(line)
}
fs.writeFileSync(filePath, content.join('\n'))

