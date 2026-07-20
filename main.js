import {Tree, prettyPrint} from "./balanced.js";

// const printData = (data) => {console.log(data)}

function printData(data) {
    console.log(data);
}

// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// let array = [7, 4, 23, 8, 9, 4, 3, 7, 9, 67, 6345, 324];

// let array = [7,  23, 8, 9, 7, 9, 67, 6345, 324];

let array = [1, 2, 3, 4, 5, 6, 7];



let tree = new Tree(array);

// prettyPrint(tree.root);

// console.log("includes 8: " + tree.includes(8));
// console.log("includes 324: " + tree.includes(324));
// console.log("includes 30: " + tree.includes(30));

tree.insert(200);
// prettyPrint(tree.root);

tree.insert(24);
// prettyPrint(tree.root);

tree.insert(11);
prettyPrint(tree.root);

// tree.deleteItem(7);
// prettyPrint(tree.root);

// tree.levelOrderForEach((item) => {console.log(item)});
// tree.levelOrderForEach();

// tree.inOrderForEach((item) => {console.log(item)});

// tree.inOrderForEach(printData);

// tree.preOrderForEach(printData);

// tree.postOrderForEach(printData);

// console.log(tree.height(909));
// console.log(tree.depth(200));
console.log("tree is balanced: " + tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log("tree is balanced: " + tree.isBalanced());





// tree.inOrderForEach(printData);





