#!/usr/bin/env node

const schema = require('../schema.json')

const chunks = []
process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  let chunk
  while ((chunk = process.stdin.read()) !== null) {
    chunks.push(chunk)
  }
})

process.stdin.on('end', () => {
  const chunkJSON = chunks.join('')
  const data = JSON.parse(chunkJSON)
  console.log(JSON.stringify(schema.concat(data), null, 2))
})
