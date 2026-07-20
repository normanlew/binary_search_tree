class Tree {
    #root; 
    constructor(array) {
        this.#root = buildTree(array);
    }

    get root() {
        return this.#root;
    }

    includes(value) {
        let node = this.#root;
        while (node != null) {
            if (node.data === value) {
                return true;
            }
            else if (value < node.data) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }

        return false;
    }

    insert(value) {
        if (this.#root == null) {
            this.#root = new Node();
            this.#root.data = value;
        }
        else {
            let node = this.#root;
            while (node.data != value) {
                if (value < node.data) {
                    if (node.left == null) {
                        let newNode = new Node();
                        newNode.data = value;
                        node.left = newNode;
                    }
                    else {
                        node = node.left;
                    }
                }
                else {
                    if (node.right == null) {
                        let newNode = new Node();
                        newNode.data = value;
                        node.right = newNode;
                    }
                    else {
                        node = node.right;
                    }     
                }
            }
        }
    }

    deleteItem(value) {
        // First, handle all scenaries where the root node's data is equal to the 
        // value
        let node = this.#root;
        if (node.data == value) {
            if (node.left == null && node.right == null) {
                this.#root = null;
            }
            else if (node.left != null && node.right == null) {
                this.#root = node.left;
            }
            else if (node.left == null && node.right != null) {
                this.#root = node.right;
            }
            else {
                let prior_node = this.#root;
                node = node.right;

                if (node.left == null) {
                    if (node.right == null) {
                        prior_node.right = null;
                    }
                    else {
                        prior_node.right = node.right;
                    }
                }
                else {
                    while (node.left != null) {
                        prior_node = node;
                        node = node.left;
                    }

                    this.#root.data = node.data;
                    if (node.right == null) {
                        prior_node.left = null;
                    }
                    else {
                        prior_node.left = node.right;
                    }
                }
            }
        }
        // Next, handle all scenarios where the root's data is not equal to the value
        else {
            let prior_node = this.#root;
            if (value > node.data) {
                node = node.right;
            }
            else {
                node = node.left;
            }

            while (node != null) {
                if (node.data == value) {
                    // console.log(node.data + " is equal to " + value);
                    if (node.left == null && node.right == null) {
                        if (prior_node.left === node) {
                            prior_node.left = null;
                        }
                        else (prior_node.right = null);
                    }
                    else if (node.left != null && node.right == null) {
                        if (prior_node.left === node) {
                            prior_node.left = node.left;
                        }
                        else {
                            prior_node.right = node.left;
                        }
                    }
                    else if (node.left == null && node.right != null) {
                        if (prior_node.right === node) {
                            prior_node.right = node.right;
                        }
                        else {
                            prior_node.left = node.right;
                        }
                    }
                    else {
                        let node_update = node;
                        let prior_node = node;
                        node = node.right;  // might be wrong
                        console.log('node value is ' + node.data);

                        if (node.left == null) {
                            if (node.right == null) {
                                node_update.data = node.data
                                prior_node.right = null;
                            }
                            else {
                                node_update.data = node.data;
                                prior_node.right = node.right;
                            }
                        }
                        else {
                            while (node.left != null) {
                                prior_node = node;
                                node = node.left;
                            }

                            node_update.data = node.data;
                            // this.#root.data = node.data;
                            if (node.right == null) {
                                prior_node.left = null;
                            }
                            else {
                                prior_node.left = node.right;
                            }
                        }
                    }
                    break;
                }
                else {
                    prior_node = node;
                    if (value > node.data) {
                        node = node.right;
                    }
                    else {
                        node = node.left;
                    }
                    // console.log("prior node value: " + prior_node.data);
                    // console.log("current node value: " + node.data);
                }
            }
        }
    }

    levelOrderForEach(callback) {
        if (callback === undefined) {
            throw new Error("A callback function is required");
        }

        if (this.#root == null) {
            return;
        }

        let queue = [];

        queue.push(this.#root);

        while (queue.length !== 0) {
            let node = queue.shift();
            callback(node.data);
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
    }

    inOrderForEach(callback) {
        if (callback === undefined) {
            throw new Error("A callback function is required");
        }

        if (this.#root == null) {
            return;
        }

        // callback(this.#root.data); // this works

        let node = this.#root;

        helperInOrder(node, callback);

        function helperInOrder(node, callback) {
            if (node != null) {
                helperInOrder(node.left, callback);
                callback(node.data);
                helperInOrder(node.right, callback);
            }
        }
    }

    preOrderForEach(callback) {
        if (callback === undefined) {
            throw new Error("A callback function is required");
        }

        if (this.#root == null) {
            return;
        }

        // callback(this.#root.data); // this works

        let node = this.#root;

        helperPreOrder(node, callback);

        function helperPreOrder(node, callback) {
            if (node != null) {
                callback(node.data);
                helperPreOrder(node.left, callback);
                helperPreOrder(node.right, callback);
            }
        }     
    }

    postOrderForEach(callback) {
        if (callback === undefined) {
            throw new Error("A callback function is required");
        }

        if (this.#root == null) {
            return;
        }

        // callback(this.#root.data); // this works

        let node = this.#root;

        postOrderForEach(node, callback);

        function postOrderForEach(node, callback) {
            if (node != null) {
                postOrderForEach(node.left, callback);
                postOrderForEach(node.right, callback);
                callback(node.data);
            }
        }     
    }

    height(value) {
        let found = false;

        let node = this.#root;
        while (node != null) {
            if (node.data === value) {
                found = true;
                break;
            }
            else {
                if (value < node.data) {
                    node = node.left;
                }
                else {
                    node = node.right;
                }
            }
        }

        if (!found) {
            return undefined;
        }

        return Math.max(height_helper(node.left), height_helper(node.right));

        function height_helper(node) {
            if (node != null) {
                return 1 + Math.max(height_helper(node.left), height_helper(node.right));
            }
            else {
                return 0;
            }
        }
    }

    depth(value) {
        let node = this.#root;

        if (node == null) {
            return undefined;
        }

        if (node.data == value) {
            return 0;
        }
        
        
        
        let return_value;;

        if (value < node.data) {
            return_value = depth_helper(node.left, value);
        }
        else {
            return_value = depth_helper(node.right, value);
        }

        // console.log("return_value is: " + return_value);
        // console.log("Number.isNaN(return_value): " + Number.isNaN(return_value));

        if (Number.isNaN(return_value)) {
            return undefined;
        }
        else {
            return return_value;
        }

        function depth_helper(node, value) {
            if (node == null) {
                return undefined;
            }
            else {
                // console.log("in depth_helper, node.data is: " + node.data);
                if (node.data === value) {
                    // console.log("node.data is equal to value");
                    return 1;
                }
                else {
                    return 1 + (value < node.data ? depth_helper(node.left, value) : depth_helper(node.right, value));
                }
            }
        }
    }

    isBalanced() {
        // if any node is not balanced, return false
        // else, return true
        let queue = [];

        queue.push(this.#root);

        while (queue.length !== 0) {
            let node = queue.shift();
            if (Math.abs(this.height(node.left.data) - this.height(node.right.data)) > 1) {
                return false;
            }
        }
        return true;

    }

    
}


class Node {
    data = null;
    left = null;
    right = null;
}

function buildTree(array) {
    let sorted = [...new Set(array)].sort((a, b) => a - b);
    // console.log(sorted);
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
        // console.log("mid: " + mid);
        // let node = new Node;
        node.data = sorted[mid];
        node.left = buildTree(sorted.slice(0, mid));
        node.right = buildTree(sorted.slice(mid + 1, sorted.length));

        // return node;
    }
    // console.log(node.data);
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




export {Tree, prettyPrint};
