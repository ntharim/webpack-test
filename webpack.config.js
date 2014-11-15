module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'es6-loader!esnext' }
    ]
  }
};