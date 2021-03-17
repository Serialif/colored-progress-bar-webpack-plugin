class Terminal {
    static clear() {
        process.stdout.write("\u001b[2J")
    }

    static cursorShow() {
        process.stdout.write("\u001b[?25h")
    }

    static cursorHide() {
        process.stdout.write("\u001b[?25l")
    }
}

module.exports = Terminal;