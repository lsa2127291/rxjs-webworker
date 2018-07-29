'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, './test'),
    filename: 'index.output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('test')],
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
