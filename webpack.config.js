const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'sourcemap',
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: '/node_modules/' }
    ],
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: '/node_modules/' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
