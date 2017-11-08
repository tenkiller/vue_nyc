// This is the root file for vue tests and serves as the entry for webpack.
// It searches this directory and subdirectories for *.spec.js and includes them
const context = require.context('.', true, /\.spec.js$/)
context.keys().forEach(context)
