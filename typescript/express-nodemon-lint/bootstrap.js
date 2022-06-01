const path = require('path')
const tsConfigPaths = require('tsconfig-paths')

const tsConfig = require('./tsconfig.json')

const baseUrl = path.join(__dirname, 'dist') // This will get the absolute path for the build folder

tsConfigPaths.register({
  baseUrl, // We're setting the base url
  paths: tsConfig.compilerOptions.paths // Here we're calling for the paths in our tsconfig.json
})
