// src: https://gist.github.com/tparveen/c78e560c996a745dae41c1f8f2650491

class Memory {
    constructor() {
        this.memory = new Float64Array(1024);   // a memory address
        this.head = 0;
    }

    // reserve a contiguous block of memory
    // consisting of `size` boes
    allocate(size) {
        if (this.head + size > this.memory.length) {
            return null;
        }

        let start = this.head;

        this.head += size;
        return start;
    }

    free(ptr) { }

    copy(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            return;
        }

        if (fromIdx > toIdx) {
            // Iterate forwards
            for (let i = 0; i < size; i++) {
                this.set(toIdx + i, this.get(fromIdx + i));
            }
        } else {
            // Iterate backwards
            for (let i = size - 1; i >= 0; i--) {
                this.set(toIdx + i, this.get(fromIdx + i));
            }
        }
    }

    get(ptr) { 
        return this.memory[ptr];
    }

    set(ptr, value) {
        this.memory[ptr] = value;
    }
}

module.exports = Memory;


// FOOTNOTES ///////////////////////////////////////

// `ptr` is shorthand for pointer: variables containing memory addresses are known as pointers