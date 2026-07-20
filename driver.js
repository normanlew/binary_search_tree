import {Tree, prettyPrint} from "./balanced.js";

function printData(data) {
    console.log(data);
}


let array = random_array();
console.log(array);

let tree = new Tree(array);

prettyPrint(tree.root);

console.log(tree.isBalanced());

// console.log(tree.levelOrderForEach);

// tree.levelOrderForEach(callback);

// tree.preOrderForEach(callback);

// tree.postOrderForEach(callback);

// tree.inOrderForEach(callback);

tree.insert(101);
tree.insert(105);
tree.insert(110);
tree.insert(200);

prettyPrint(tree.root);

console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());

// console.log(tree.levelOrderForEach);

console.log("-------------------");
tree.levelOrderForEach(callback);

console.log("-------------------");
tree.preOrderForEach(callback);

console.log("-------------------");
tree.postOrderForEach(callback);

console.log("-------------------");
tree.inOrderForEach(callback);






// Create a binary search tree from an array of random numbers with each element having a value less than 100. 
// You can create a function that returns an array of random numbers every time you call it if you wish.
// Confirm that the tree is balanced by calling isBalanced().
// Print out all elements in level, pre, post, and in order.
// Unbalance the tree by adding several numbers whose value is more than 100.
// Confirm that the tree is unbalanced by calling isBalanced().
// Balance the tree by calling rebalance().
// Confirm that the tree is balanced by calling isBalanced().
// Print out all elements in level, pre, post, and in order.

function callback(item) {
    console.log(item);
}


function random_array() {
    let array = [];

    for (let i = 0; i < 25; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    return array;
}