exports = module.exports = ProgressBar;

function ProgressBar(format, options) {
    this.stream = options.stream || process.stderr;

    if (typeof (options) == 'number') {
        const total = options;
        options = {};
        options.total = total;
    } else {
        options = options || {};
        if ('string' !== typeof format) throw new Error('format required');
        if ('number' !== typeof options.total) throw new Error('total required');
    }

    this.format = format;
    this.curr = options.curr || 0;
    this.total = options.total;
    this.width = options.width || this.total;
    this.clear = options.clear
    this.chars = {
        complete: options.complete || '=',
        incomplete: options.incomplete || '-',
        head: options.head || (options.complete || '=')
    };
    this.renderThrottle = options.renderThrottle !== 0 ? (options.renderThrottle || 16) : 0;
    this.lastRender = -Infinity;
    this.callback = options.callback || function () {
    };
    this.tokens = {};
    this.lastDraw = '';
}

ProgressBar.prototype.tick = function (len, tokens) {
    if (len !== 0)
        len = len || 1;
    // swap tokens
    if ('object' === typeof len) tokens = len, len = 1;
    if (tokens) this.tokens = tokens;

    // start time for eta
    if (0 == this.curr) this.start = new Date;

    this.curr += len

    // try to render
    this.render();

    // progress complete
    if (this.curr >= this.total) {
        this.render(undefined, true);
        this.complete = true;
        this.terminate();
        this.callback(this);
        return;
    }
};

ProgressBar.prototype.render = function (tokens, force) {
    force = force !== undefined ? force : false;
    if (tokens) this.tokens = tokens;

    if (!this.stream.isTTY) return;

    const now = Date.now();
    const delta = now - this.lastRender;
    if (!force && (delta < this.renderThrottle)) {
        return;
    } else {
        this.lastRender = now;
    }

    ratio = Math.min(Math.max(this.curr / this.total, 0), 1);

    const percent = Math.floor(ratio * 100);
    let incomplete, complete, completeLength;
    const elapsed = new Date - this.start;
    const eta = (percent == 100) ? 0 : elapsed * (this.total / this.curr - 1);
    const rate = this.curr / (elapsed / 1000);

    /* populate the bar template with percentages and timestamps */
    let str = this.format
        .replace(':current', this.curr)
        .replace(':total', this.total)
        .replace(':elapsed', isNaN(elapsed) ? '0.0' : (elapsed / 1000).toFixed(1))
        .replace(':eta', (isNaN(eta) || !isFinite(eta)) ? '0.0' : (eta / 1000)
            .toFixed(1))
        .replace(':percent', percent.toFixed(0) + '%')
        .replace(':rate', Math.round(rate));

    /* replace the extra tokens */
    if (this.tokens) for (let key in this.tokens) str = str.replace(':' + key, this.tokens[key]);


    /* compute the available space (non-zero) for the bar */
    withoutAnsiStr = str.replace(/\x1b\[.*?m/g, "")

    let availableSpace = Math.max(0, this.stream.columns - withoutAnsiStr.replace(':bar', '').length);
    if (availableSpace && process.platform === 'win32') {
        availableSpace = availableSpace - 1;
    }

    const width = Math.min(this.width, availableSpace);

    /* TODO: the following assumes the user has one ':bar' token */
    completeLength = Math.round(width * ratio);
    complete = Array(Math.max(0, completeLength + 1)).join(this.chars.complete);
    incomplete = Array(Math.max(0, width - completeLength + 1)).join(this.chars.incomplete);

    /* add head to the complete string */
    if (completeLength > 0)
        complete = complete.slice(0, -1) + this.chars.head;

    /* fill in the actual progress bar */
    str = str.replace(':bar', complete + incomplete);

    if (this.lastDraw !== str) {
        this.stream.cursorTo(0);
        this.stream.write(str);
        this.stream.clearLine(1);
        this.lastDraw = str;
    }
};

ProgressBar.prototype.update = function (ratio, tokens) {
    const goal = Math.floor(ratio * this.total);
    const delta = goal - this.curr;

    this.tick(delta, tokens);
};

ProgressBar.prototype.terminate = function () {
    if (this.clear) {
        if (this.stream.clearLine) {
            this.stream.clearLine();
            this.stream.cursorTo(0);
        }
    } else {
        this.stream.write('\n');
    }
};
