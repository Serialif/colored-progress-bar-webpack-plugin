// inspired by kuler, node-progress and ansi-parser

const webpack = require('webpack')
const Config = require('./lib/config')
const ProgressBar = require('./lib/progress-bar')

class ColoredProgressBarPlugin {
    constructor(options) {
        this.options = {...Config.DEFAULT_OPTIONS, ...options}

        let format = this.getFormat()

        const opt = Object.assign({
            complete: this.options.completeChar,
            incomplete: this.options.incompleteChar,
            width: this.options.width,
            total: this.options.TOTAL,
        })

        let bar = new ProgressBar(format, opt)
        let completed = false

        return new webpack.ProgressPlugin(function (percent, message, ...args) {
            if (args[0] === 'after emit') {
                bar.update(100, {
                    status: 'Completed ',
                    percent: '100%',
                    message: ''
                })
                completed = true
            } else if (!completed) {
                bar.update(percent, {
                    status: 'In progress ',
                    percent: (percent * 100).toFixed() + '% ',
                    message: message
                })
            }
        })
    }

    getFormat() {
        if (this.options.all.color === null) {
            return this.colorize(this.options.status.color, ':status ')
                + this.colorize(this.options.progressBar.color, ':bar ')
                + this.colorize(this.options.percent.color, ':percent ')
                + this.colorize(this.options.message.color, ':message')
        } else {
            return colorize(this.options.all.color, ':status :bar :percent :message')
        }
    }

    colorize(color, text) {
        return '\x1b[' + Config.ANSI_COLORS[color] + 'm' + text + '\x1b[39;49m'
    }
}

module.exports = ColoredProgressBarPlugin