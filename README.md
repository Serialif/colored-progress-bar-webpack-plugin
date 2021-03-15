<div align="center">
    <p align="center"><a href="https://serialif.com"><img width="80" height="80" src="https://serialif.com/images/serialif-white.png" alt="Serialif"></a>
<hr>
    <p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin.png"
             alt="Colored Progress Bar Webpack Plugin"></p>

<h3 align="center">A progress bar plugin for Webpack with customizable color and width.</h3>
<p align="center"><a href="https://github.com/webpack/webpack"><img width="60" height="60" src="https://webpack.js.org/assets/icon-square-big.svg" alt="Webpack"></a></p>
<hr>
<p align="center"><img src="https://media.giphy.com/media/lrbIDcwxyyo9eKLAXw/giphy.gif" alt="colored-progress-bar-webpack-plugin">
    </p>
</div>

# Colored Progress Bar Webpack Plugin
## Installation

```
npm i -D colored-progress-bar-webpack-plugin
```

## Usage

Include the following in your Webpack config.

```javascript
const ColoredProgressBarPlugin = require('colored-progress-bar-webpack-plugin');

...

plugins: [
    new ColoredProgressBarPlugin()
]
```

## Options

#### `width` - The width of the progress bar (on a single line)

#### `color` - The color of the progress bar accepts the following values:

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

Accept almost any modifiers, colors and background colors from [chalk](https://github.com/chalk/chalk).

The default options are :

```javascript
    new ColoredProgressBarPlugin({
    width: 50,
    endWidth: 0,
    color: 'blue'
})
```


## Dependencies
- [webpack](https://github.com/webpack/webpack)
- [node-progress](https://github.com/visionmedia/node-progress)
- [chalk](https://github.com/chalk/chalk)

## License

MIT
