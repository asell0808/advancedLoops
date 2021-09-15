//Advanced Arrays with examples and problems
const basket = ['apples', 'oranges', 'grapes'];

//1. for loop, do while etc
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

//2. forEach
basket.forEach(item => {
    console.log(item);
})

//3. for of
// this loop iterates the array, essentially going 1 by 1 at each item in the array
// you can iterate over strings and arrays
for (item of basket){
    console.log(item);
}

// 4. for in
// for in works with objects

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// for in enumerates objects
for (item in detailedBasket){
    console.log(item);
}

// objects are not iterable
