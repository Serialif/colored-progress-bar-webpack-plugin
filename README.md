<div align="center">
    <p align="center"><a href="https://serialif.com"><img width="80" height="80" src="https://serialif.com/images/serialif-white.png" alt="Serialif"></a>
<hr>
    <p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin-logo.png"
             alt="Colored Progress Bar Webpack Plugin"></p>

<h3 align="center">A customizable progress bar plugin for Webpack</h3>
<p align="center"><a href="https://github.com/webpack/webpack"><img width="60" height="60" src="https://webpack.js.org/assets/icon-square-big.svg" alt="Webpack"></a></p>
<hr>
<p align="center"><img src="https://serialif.com/images/colored-progress-bar-webpack-plugin-demos.png"
             alt="Colored Progress Bar Webpack Plugin example"></p>
</div>
<hr>

## <span style="color: #8C54FE">Features</span>
- No dependencies
- Show <span style="color: #F92672">**only the elements you want**</span>
- Modify <span style="color: #F92672">**color**</span> whole bar with one color or each element separately
- Modify <span style="color: #F92672">**size**</span> of the progress bar up to the maximum size available on the line
- Modify <span style="color: #F92672">**characters**</span> of the bar (complete and incomplete)
- <span style="color: #F92672">**Hide cursor**</span> during progression
- Play the default <span style="color: #F92672">**notification sound**</span> when compilation is complete. Very useful 
  in watch mode. *Currently, <span style="color: #FD971F">this feature is only available for Windows 10 users</span>.*

## <span style="color: #8C54FE">Installation</span>

```
npm install -D colored-progress-bar-webpack-plugin
```
```
yarn add -D colored-progress-bar-webpack-plugin
```

## <span style="color: #8C54FE">Usage</span>

Include the following in your Webpack config.

```javascript
  const ColoredProgressBar = require('colored-progress-bar-webpack-plugin');
  
  plugins: [
      new ColoredProgressBar()
  ]
```

## <span style="color: #8C54FE">Elements</span>
The progress bar is made up of 5 elements on 2 lines.
### First row

- <span style="color: #82B414">**Status**</span> : compilation status
- <span style="color: #82B414">**Bar**</span> : the bar itself 
- <span style="color: #82B414">**Percent**</span> : percentage of progression
- <span style="color: #82B414">**Message**</span> : summary of the action the compiler performs

### Second row
- <span style="color: #82B414">**Detail**</span> : action that the compiler performs

## <span style="color: #8C54FE">Options</span>
### Elements
Define the elements to display <span style="color: #8ED6FB">*(boolean)*</span>
  - `showStatus`
  - `showBar`
  - `showPercent`
  - `showMessage`
  - `showDetail`

### Colors
Color of the entire progress bar <span style="color: #8ED6FB">*(string)*</span>
  - `colorAll` <span style="color: #FD971F">*if you set the color for the whole bar, it will override the elements colors*</span>
  

Color of each item separately <span style="color: #8ED6FB">*(string)*</span>
  - `colorStatus`
  - `colorBar`
  - `colorPercent`
  - `colorMessage`
  - `colorDetail`

*Accepts the following values:*
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

### Width
Number of characters of the progress bar <span style="color: #8ED6FB">*(number)*</span>
  - `width` <span style="color: #FD971F">*if this exceeds the maximum size available on the line, this value will be automatically reduced*</span>

### Characters
Define the characters used to represent the completed and uncompleted portion of the bar <span style="color: #8ED6FB">*(string)*</span>
  - `completeChar`
  - `incompleteChar`

### Detail alignment
Define if the detail text should be aligned with the bar <span style="color: #8ED6FB">*(boolean)*</span>
  - `alignDetailOnBar`

### Cursor
Define if the cursor should be hidden during compilation <span style="color: #8ED6FB">*(boolean)*</span>
  - `hideCursor`
### Notification sound

Define if the default notification sound is played when compilation is complete <span style="color: #8ED6FB">*(boolean)*</span>
  - `notification` <span style="color: #FD971F">*only available for Windows 10 users*</span>


### Default values

```javascript
    new ColoredProgressBar({
      showStatus: true,
      showBar: true,
      showPercent: true,
      showMessage: true,
      showDetail: true,
    
      colorAll: null,
      colorStatus: 'green',
      colorBar: 'lightCyan',
      colorPercent: 'blue',
      colorMessage: 'lightYellow',
      colorDetail: 'lightMagenta',
    
      width: 100,
      completeChar: '█',
      incompleteChar: '░',
      alignDetailOnBar: true,
      hideCursor: true,
      notification: false,
})
```
## <span style="color: #8C54FE">License</span>

MIT