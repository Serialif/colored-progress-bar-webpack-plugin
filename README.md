<div align="center">
    <p align="center"><a href="https://serialif.com"><img width="80" height="80" src="https://serialif.com/images/serialif.png" alt="Serialif"></a>
<hr>
    <p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin-logo.png"
             alt="Colored Progress Bar Webpack Plugin"></p>

<h3 align="center">A progress bar plugin for Webpack with customizable color and width.</h3>
<p align="center"><a href="https://github.com/webpack/webpack"><img width="60" height="60" src="https://webpack.js.org/assets/icon-square-big.svg" alt="Webpack"></a></p>
<hr>
<p align="center"><img src="https://media.giphy.com/media/lrbIDcwxyyo9eKLAXw/giphy.gif" alt="colored-progress-bar-webpack-plugin">
    </p>
<p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin-example.png"
             alt="Colored Progress Bar Webpack Plugin example"></p>
</div>

# Colored Progress Bar Webpack Plugin

## Features
- No dependencies
- Change the size of the progress bar up to the maximum size available on the line
- Color the whole bar with one color or each element separately
- Cursor is hidden during progression

## Installation

```
npm i -D colored-progress-bar-webpack-plugin
```

## Usage

Include the following in your Webpack config.

```javascript
const ColoredProgressBar = require('colored-progress-bar-webpack-plugin');

plugins: [
    new ColoredProgressBar()
]
```

## Options
### Width
- #### Number of characters of the progress bar (on a single line)
    - `width`
### Colors
- #### Color of the entire progress bar
  - `all: {color}`
- #### Color of each item separately  
  - `status: {color}`
  - `progressBar: {color}`
  - `percent: {color}`
  - `message: {color}` 

  
- *Accepts the following values:*
  - `black`
  - `red`
  - `green`
  - `yellow`
  - `blue`
  - `magenta`
  - `cyan`
  - `darkGray`
  - `lightGray`
  - `lightRed`
  - `lightGreen`
  - `lightYellow`
  - `lightBlue`
  - `lightMagenta`
  - `lightCyan`
  - `white`

### Default values

```javascript
    new ColoredProgressBar({
        width: 50,
        all: {color: null},
        status: {color: 'blue'},
        progressBar: {color: 'yellow'},
        percent: {color: 'green'},
        message: {color: 'lightBlue'}
})
```
If you set the color for `all`, it will overwrite all the others

## License

MIT