const webpack = require('webpack')
const Config = require('./lib/config')
const ProgressBar = require('./lib/progress-bar')
const {exec} = require('child_process')

class ColoredProgressBarPlugin {
    constructor(options) {
        this.options = {...Config.DEFAULT_OPTIONS, ...options}
        this.options.ansiColors = Config.ANSI_COLORS

        let progressBar = new ProgressBar(this.getFormat(), this.options)
        let completed = false
        let notification = this.options.notification;

        return new webpack.ProgressPlugin(function (percent, message, ...args) {
            if (message === 'done') {
                progressBar.update(100, {
                    status: 'Completed ',
                    percent: '100%',
                    message: 'done',
                    detail: ''
                })
                completed = true
                if (notification) exec(`rundll32 user32.dll,MessageBeep`)
            } else if (!completed) {
                percent = (percent * 100).toFixed()
                progressBar.update(percent, {
                    status: 'In progress ',
                    percent: percent + '% ',
                    message: message,
                    detail: args.join('-')
                })
            }
        })
    }

    getFormat() {
        let format = this.colorize(this.options.colorAll, ':status :bar :percent :message')
        if (this.options.colorAll === null) {
            format = this.getElement('status', this.options.colorStatus)
                + this.getElement('bar', this.options.colorBar)
                + this.getElement('percent', this.options.colorPercent)
                + this.getElement('message', this.options.colorMessage)
        }
        return format.length > 0 ? format : ' '
    }

    getElement(element, color) {
        if (this.options['show' + this.ucFirst(element)] === true) {
            return ' ' + this.colorize(Config.BAR_ELEMENTS[element], color) + ' '
        }
        return ''
    }

    colorize(text, color) {
        return '\x1b[' + Config.ANSI_COLORS[color] + 'm' + text + '\x1b[39;49m'
    }

    ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}

module.exports = ColoredProgressBarPlugin
