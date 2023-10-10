//similar to https://geeksforgeeks.org/construct-a-complete-binary-tree-given-array

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export const buildBinaryTree = (arr, i) => {
    let root;
    if (i < arr.length) {
        root = new Node(arr[i]);
        root.left = buildBinaryTree(arr, 2 * i + 1);
        root.right = buildBinaryTree(arr, 2 * i + 2);
    }
    return root;
};

const arr = [1, 2, 3, 4, 5];
const root = buildBinaryTree(arr, 0);
console.log(root.value);
console.log(root.left);
console.log(root.right);
console.log(root.left.left);
console.log(root.left.right);
