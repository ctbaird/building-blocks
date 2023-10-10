import { buildBinaryTree } from "./buildBinaryTree.js";

const visit = (node) => {
    console.log(node.value);
};

const inorder = (node) => {
    if (node == null) {
        return;
    }
    inorderTraversal(node.left);
    visit(node);
    inorderTraversal(node.right);
};

const preorder = (node) => {
    if (node == null) {
        return;
    }
    visit(node);
    preorder(node.left);
    preorder(node.right);

};

const postorder = (node) => {
    if (node == null) {
        return;
    }
    postorder(node.left);
    postorder(node.right);
    visit(node);
};

const tree = buildBinaryTree([1, 2, 3, 4, 5], 0);
console.log('inorder', inorderTraversal(tree));
console.log('preorder', preorder(tree));
console.log('postorder', postorder(tree));

