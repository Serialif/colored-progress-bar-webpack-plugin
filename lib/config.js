class Config {
    static BAR_ELEMENTS = [
        ':status',
        ':bar',
        ':percent',
        ':msg'
    ]

    static DEFAULT_OPTIONS = {
        width: 50,
        endWidth: 50,

        completeChar: '█',
        incompleteChar: '░',

        all: {
            color: null,
            clear: null
        },
        status: {
            color: 'blue',
            visible: true,
        },
        progressBar: {
            color: 'yellow',
            visible: true,
        },
        percent: {
            color: 'green',
            visible: true,
        },
        message: {
            color: 'lightBlue',
            visible: true,
        },
        TOTAL: 100
    }

    static ANSI_COLORS = {
        defaultForegroundColor: '39',
        black: '30',
        red: '31',
        green: '32',
        yellow: '33',
        blue: '34',
        magenta: '35',
        cyan: '36',
        lightGray: '37',
        darkGray: '90',
        lightRed: '91',
        lightGreen: '92',
        lightYellow: '93',
        lightBlue: '94',
        lightMagenta: '95',
        lightCyan: '96',
        white: '97'
    }
}

module.exports = Config