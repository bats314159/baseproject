// logger.js

class Logger {
    constructor() {
        this.startTime = new Date();
    }

    log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }

    logWithTime(message) {
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
        this.log(`${message} (Elapsed time: ${elapsedTime}s)`);
    }
}

module.exports = new Logger();