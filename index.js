const Progress = require('progress');
const chalk = require('chalk');
const webpack = require('webpack');

module.exports = function ColoredProgressBarPlugin(options) {
    const defaultOptions = {
        width: 50,
        endWidth : 50,
        color: 'blue',
        clear: false,
        clearStatus: false,
        clearBar: false,
        clearPerCent: false
    };
    options = {...defaultOptions, ...options};

    const fmt = eval('chalk.' + options.color)(':completed :bar :per100 :msg')

    const opt = Object.assign({
        complete: '█',
        incomplete: '░',
        width: options.width,
        total: 100,
        clear: options.clear
    });

    let bar = new Progress(fmt, opt);
    let completed = false;
    process.stderr.write('\n')

    return new webpack.ProgressPlugin(function (percent, msg, ...args) {
        if (args[0] === 'after emit') {
            bar.width = options.clearBar ? 0 : options.endWidth
            bar.update(100, {
                msg: '',
                completed: options.clearStatus ? '' : 'Completed ',
                per100: options.clearPerCent ? '' : '100%'
            });
            completed = true;
        } else if (!completed) {
            const per100 = (percent * 100).toFixed() + '%'
            bar.update(percent, {
                msg: msg,
                completed: ' In progress ',
                per100: per100
            });
        }
    });
};
