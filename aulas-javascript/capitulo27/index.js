let fruits = ["apple", "banana", "orange", "strawberry", "grape", "mango", "pineapple", "kiwi", "peach", "watermelon", "lemon"];
const listNumbersA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const listNumbersB = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const [x, y, z] = [10, 25, 38];

// Index and elements
console.table(fruits);
console.log(fruits[6]);
console.log(fruits.length);

// headquarters ( Mat )
console.table(listNumbersA);
console.log(listNumbersA);

// Destructuring
console.log(x);
console.log(y);
console.log(z);

// Spread Operator
console.log(...fruits);
console.log(Math.max(...listNumbersB));

// Add elements
fruits.push("cherry");
fruits.push("blueberry");
fruits.push("raspberry");
console.table(fruits);

// Remove elements
fruits.pop();
fruits.pop();
fruits.pop();
console.table(fruits);

// Order elements
console.table(fruits.sort());
console.table(fruits.reverse())

// Loop - for, for of, for in
for(let i = 0; i < fruits.sort().length; i++){
    console.log(fruits[i]);
}

for (let item of fruits) {
    console.log(item);
}

for (const key in fruits) {
    if (Object.hasOwnProperty.call(fruits, key)) {
        const element = fruits[key];
        console.log(element);
    }
}

// Continue and break
for (let item of fruits) {
    if(item === "pineapple"){
        console.log(`I will eat ${item} after lunch.`);
        break;
    }
}

for (let item of fruits) {
    if(item !== "pineapple"){
        console.log(item);
        continue;
    }
}

// Foreach
listNumbersB.forEach(element => {
    console.log(Math.pow(element, 2));
});

// Map
listNumbersB.map((element, index) => {
    if(element % 2 === 0){
        console.log(`Element: ${element} in index: ${index} -> ${element} X ${element} = ${Math.pow(element, 2)}`);
    }
});

// Filter
let evenNumbers = listNumbersB.filter((element) => element % 2 === 0 );
console.log(evenNumbers);

// Find
const findPineapple = fruits.find((element) => element === "pineapple");
console.log(findPineapple);

// Every
let numbersDividesBythree = listNumbersB.every((element) => element % 3 === 0);
console.log(numbersDividesBythree);

// Some
const hasApple = fruits.some((element) => element === "apple");
console.log(hasApple);

// Reduce
const totalSum = listNumbersB.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);
