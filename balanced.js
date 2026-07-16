class Tree {
    root; 
    constructor(array) {
        this.root = buildTree(array);
    }

    get root() {
        return this.root;
    }
}


class Node {
    data = null;
    left = null;
    right = null;
}

function buildTree(array) {
    let sorted = [...new Set(array)].sort((a, b) => a - b);
    console.log(sorted);
    let node = new Node();
    if (sorted.length === 0) {
        return null;
    }
    else if (sorted.length === 1) {
        node.data = sorted[0];
        // return node;
    }
    else {
        
        let mid = Math.trunc(sorted.length / 2);
        console.log("mid: " + mid);
        // let node = new Node;
        node.data = sorted[mid];
        node.left = buildTree(sorted.slice(0, mid));
        node.right = buildTree(sorted.slice(mid + 1, sorted.length));

        // return node;
    }
    console.log(node.data);
    return node;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}




export {Node, Tree, prettyPrint};
