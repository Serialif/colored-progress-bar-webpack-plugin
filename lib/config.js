class Config {
    static BAR_ELEMENTS = {
        status: ':status',
        bar: ':bar',
        percent: ':percent',
        message: ':message'
    }

    static DEFAULT_OPTIONS = {
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

        total: 100,

        clear: null,
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