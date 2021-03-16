// 'use strict';

// process.exit(0)

// inspired by kuler, node-progress and ansi-parser

const Progress = require('./lib/node-progress')
const webpack = require('webpack')

module.exports = function ColoredProgressBarPlugin(options) {
    const defaultOptions = {
        width: 50,
        endWidth: 50,

        global: {
            color: null,
            visible: null,
            clear: null
        },
        status: {
            color: 'blue',
            visible: true,
            clear: false
        },
        bar: {
            color: 'yellow',
            visible: true,
            clear: false
        },
        percent: {
            color: 'green',
            visible: true,
            clear: false
        },
        //TODO Créer un objet contenant les trois propriétés, est-ce que ça apporte quelque chose ?

        //TODO Voir pour une fonction random des couleurs

        color: 'blue',
        clear: false,
        clearStatus: false,
        clearBar: false,
        clearPerCent: false
    };
    options = {...defaultOptions, ...options};

    const ansiColors = {
        defaultForegroundColor: '39',
        black: '30',
        red: '31',
        green: '32',
        yellow: '33',
        blue: '34',
        magenta: '35',
        cyan: '36',
        lightgray: '37',
        darkgray: '90',
        lightred: '91',
        lightgreen: '92',
        lightyellow: '93',
        lightblue: '94',
        lightmagenta: '95',
        lightcyan: '96',
        white: '97'
    }

    const colorize = (color, text) => {
        return '\x1b[' + color + 'm' + text + '\x1b[39;49m'
    }

    let format

    if (options.global.color === null) {
        format = colorize(ansiColors[options.status.color], ':completed ')
            + colorize(ansiColors[options.bar.color], ':bar ')
            + colorize(ansiColors[options.percent.color], ':percent :msg')
    } else {
        format = colorize(ansiColors[options.global.color], ':completed :bar :percent :msg')
    }

    const opt = Object.assign({
        complete: '█',
        incomplete: '░',
        width: options.width,
        total: 100,
        clear: options.clear
    });

    let bar = new Progress(format, opt);
    let completed = false;
    process.stderr.write('\n')

    return new webpack.ProgressPlugin(function (percent, msg, ...args) {
        if (args[0] === 'after emit') {
            bar.width = options.clearBar ? 0 : options.endWidth
            bar.update(100, {
                msg: '',
                completed: options.clearStatus ? '' : 'Completed ',
                percent: options.clearPerCent ? '' : '100%'
            });
            completed = true;
        } else if (!completed) {
            bar.update(percent, {
                msg: msg,
                completed: ' In progress ',
                percent: (percent * 100).toFixed() + '%'
            });
        }
    });
};

