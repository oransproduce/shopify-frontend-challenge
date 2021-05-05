module.exports = { 
  plugins: [
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/core',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/icons',
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'icons'
    ]
  ],
  presets: [
    [
      '@babel/preset-env', 
      {
        targets: {
          node: 'current'
        }
      }
    ], 
    '@babel/preset-react'
  ],
};