const visit = (node) => {
    console.log(node.value);
};

const inorderTraversal = (node) => {
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