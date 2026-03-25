'use strict';

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

module.exports = Queue;