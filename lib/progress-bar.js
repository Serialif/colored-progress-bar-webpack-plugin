"use strict";

class ProgressBar {
    constructor(format, options) {
        this.stream = process.stderr
        this.format = format;
        this.options = options
        this.previousStr = '';
        this.firstDisplay = true;
    }

    update(percent, tokens) {
        this.str = this.format
        this.tokens = tokens
        this.render(percent);
        if (percent >= this.options.total) {
            this.quit()
            return
        }
    };

    render(percent) {
        this.addTokens();
        this.addBar(percent);
        this.addDetail()
        this.display();
    };

    addTokens() {
        for (let key in this.tokens) {
            this.str = this.str.replace(':' + key, this.tokens[key]);
        }
    }

    addBar(percent) {
        const withoutAnsiStr = this.stringWithoutAnsi(this.str)

        const availableSpace = Math.max(0, this.stream.columns - withoutAnsiStr.replace(':bar', '').length);

        const width = Math.min(this.options.width, availableSpace);

        const completedLength = Math.round(width * (percent / this.options.total));
        const completePartBar = Array(completedLength).join(this.options.completeChar);
        const incompletePartBar = Array(width - completedLength).join(this.options.incompleteChar);
        this.str = this.str.replace(':bar', completePartBar + incompletePartBar);
    }

    addDetail() {
        if (this.options.showDetail === true) {
            let alignedCarrierReturn = ('\n ')
            if (this.options.alignDetailOnBar === true) {
                alignedCarrierReturn = ('\n').padEnd(this.tokens.status.length + 4)
            }

            const maxLength = this.stream.columns - alignedCarrierReturn.length;

            this.tokens.detail = this.tokens.detail.substring(0, maxLength)
            this.str += alignedCarrierReturn + this.getDetail()
        }
    }

    getDetail() {
        if (this.options.colorAll === null) {
            return this.colorize(this.tokens.detail, this.options.colorDetail,)
        } else {
            return this.colorize(this.tokens.detail, this.options.colorAll,)
        }
    }

    display() {
        if (this.previousStr !== this.str) {
            try {
                this.hideCursor();
                if (this.firstDisplay !== true && this.options.showDetail === true) {
                    this.stream.moveCursor(0, -1)
                } else {
                    this.firstDisplay = false
                }
                this.stream.cursorTo(0)
                this.stream.write(this.str)
                this.stream.clearLine(1)
                this.previousStr = this.str
            } catch (e) {
                console.log('The progress bar has encountered an error... please wait')
            }
        }
    }

    quit() {
        this.stream.write('\n')
        this.showCursor();
    }

    colorize(text, color) {
        return '\x1b[' + this.options.ansiColors[color] + 'm' + text + '\x1b[39;49m'
    }

    stringWithoutAnsi(text) {
        return text.replace(/\x1b\[.*?m/g, "")
    }

    showCursor() {
        if (this.options.hideCursor === true) {
            process.stdout.write("\x1b[?25h")
        }
    }

    hideCursor() {
        if (this.options.hideCursor === true) {
            process.stdout.write("\x1b[?25l")
        }
    }
}

module.exports = ProgressBar;