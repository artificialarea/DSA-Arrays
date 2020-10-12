# Working with arrays

_Pair: Michella + Sacha_

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/4#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`

<br />

## 1. Implement an Array class from scratch

see: **[`memory.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/memory.js)** & **[`array-v1.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/array-v1.js)** + **[`array-v2.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/array-v2.js)** which have different approaches to dealing with capacity and memory addresses in `push(value)` method.




<br />

## 2. Explore the push() method

see: **[`array-actions.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/array-actions.js)**

**1) What is the length, capacity and memory address of your array?**

`Array { length: 1, _capacity: 3, ptr: 0 }`

<br />

**2) What is the length, capacity and memory address of your array after additonal `arr.push()`es?**

> **if import `array-v1.js`**
`Array { length: 6, _capacity: 18, ptr: 45 }`
> The length is 6 because we pushed 6 items into the array.
> It's capacity has grown 3x each time an item is pushed into the array, because `resize` is executed every time with the `SIZE_RATIO` property set to 3. 
> Our pointer is now at the 45th place because the previous memeory blocks have been taken up by our arrays of sizes 3 + 6 + 9 + 12 + 15. We should probably be clearing those unused blocks of memory somehow.
> **O(n)**

> **if import `array-v2.js`**
`Array { length: 6, _capacity: 12, ptr: 3 }`
> The length is 6 because we pushed 6 items into the array.
> It's capacity only conditionally resizes by 3x when the `length > capacity`, so it resizes less than `array-v1.js`  
> Confused by the memory blocks and why the pointer is only at the 3th place, tho???
> **O(1)** for Best and Average case scenarios now

:confused:&nbsp; **?? QUESTION: How is the pointer calculated the way it is ??**

<br />

**3) What is the purpose of the `_resize()` function in your Array class?**
> To allocate a new block of memory for our array when the current block of memory is too small to perform the operation we need.




<br />

## 3. Exploring the pop() method

see: **[`array-actions.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/array-actions.js)** (with import `array-v1.js`)

**What is the length, capacity and memory address of your array after some `arr.pop()`s?**

`Array { length: 3, _capacity: 18, ptr: 45 }`
> We popped 3 times which decreases the length by 3, but the capacity and memory address have already been shifted by previous pushing and remain as is.




<br />

## 4. Understanding more about how arrays work

see: **[`array-float.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/array-float.js)**

> Item prints as `NaN` because item is a string and the Array is defined as holding floats (numbers) only: `this.memory = new Float64Array(1024);`





<br />

## 5. URLify a string

see: **[`urlify.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/urlify.js)**

> **O(n)**



<br />

## 6. Filtering an array

see: **[`filter-array.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/filter-array.js)**

> **O(n)**




<br />

## 7. Max sum in the array

see: **[`max-sum-array.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/max-sum-array.js)**

> **O(n)**



<br />

## 8. Merge arrays

see: **[`merge-arrays.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/merge-arrays.js)**

> **O(n), O(n log n), or O(n^2)** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): "The time and space complexity of the sort cannot be guaranteed as it depends on the implementation." Presumably referring to approaches such as 'Bubble Sort', 'Merge Sort', etc.


<br />

## 9. Remove characters

see: **[`remove-chars.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/remove-chars.js)**

> **O(n)**



<br />

## 10. Products

see: **[`products.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/products.js)**

> **O(n^2)** because it's a for loop within a .forEach loop. 




<br />

## 11. 2D array

see: **[`2d-reset.js`](https://github.com/artificialarea/DSA-Arrays/blob/main/2d-reset.js)**

> **O(n^3)** (I think) Because one nested for loop O(n^2) alongside another nested for loop within a forEach loop O(n^3).

Instructions: Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

```
Input:
[
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

Output:
[
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,0,0,0],
  [0,0,1,1,0]
];
```


<br />

## 12. String rotation





<br />
