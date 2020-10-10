const MemoryClass = require('./memory'); 
const memory = new MemoryClass; 
// ^^^^ would never have realized this without Marius >_<
// before I just erroneously had...
// const memory = require('./memory'); 



// IMPLEMENTING AN ARRAY
// src: https://courses.thinkful.com/dsa-v1/checkpoint/4#implementing-an-array

// There is a problem with trying to implement your own array in JavaScript: 
// JavaScript doesn't give you direct access to the underlying memory in your system. 

// You can, however, mimic the direct memory access that lower-level programming languages 
// give you by using an array to simulate a block of memory. 

// This would be absurd in real-world code 
// — you are using an array to allow you to implement an array — 
// but it's a useful way to help you understand how low-level memory access works.


// v2 Approach
// Rather than resizing every time you push some data, 
// you could allocate more space (_capacity) than you need. 
// That way you would need to resize far less often.
// Best and Average case now: O(1) ...because won't need to resize. 
// The tradeoff is that you are wasting some memory when the capacity is greater than the length.
class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index)
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;



// // v1 Approach: 
// // Resizes the array, then increases the length and sets a single memory address.
// // Worst, best, and average case: O(n) operation
// class Array {
//     constructor() {
//         this.length = 0;
//         this.ptr = memory.allocate(this.length);
//     }

//     push(value) {
//         this._resize(this.length + 1);
//         memory.set(this.ptr + this.length, value);
//         this.length++;
//     }

//     _resize(size) {
//         const oldPtr = this.ptr;
//         this.ptr = memory.allocate(size);
//         if (this.ptr === null) {
//             throw new Error('Out of memory');
//         }
//         memory.copy(this.ptr, oldPtr, this.length);
//         memory.free(oldPtr);

//     }
// }


function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

main();