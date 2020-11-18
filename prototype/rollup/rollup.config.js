export default {
    input: 'src/entry.js',
    output: {
      file: 'dist/index.js',
      name: 'Element',
      format:'umd'
    },
    plugins: [
    //   typescript(/*{ plugin options }*/)
    ]
  }