<div align="center">
    <p align="center"><a href="https://serialif.com"><img width="80" height="80" src="https://serialif.com/images/serialif-white.png" alt="Serialif"></a>
<hr>
    <p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin.png"
             alt="Colored Progress Bar Webpack Plugin"></p>

<h3 align="center">A customizable colorful progress bar plugin for Webpack</h3>
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
const ColoredProgressBar = require('colored-progress-bar-webpack-plugin');

...

plugins: [
    new ColoredProgressBar()
]
```

## Options

- #### Widths
    - `width` - Width of the progress bar (on a single line)
    - `endWidth` - Width of the progress bar after completed (also on a single line)

- #### Visibility after completed
    - `clear` - Clear all the progress bar
    - `clearStatus` - Clear only status
    - `clearBar` - Clear only bar
    - `clearPerCent` - Clear only percentage

- #### `color` - Color of the progress bar accepts the following values:

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
    new ColoredProgressBar({
      width: 50,
      endWidth: 50,
      color: 'blue',
      clear: false,
      clearStatus: false,
      clearBar: false,
      clearPerCent: false
    })
```

## Dependencies

- [node-progress](https://github.com/visionmedia/node-progress)
- [chalk](https://github.com/chalk/chalk)

## License

MIT
