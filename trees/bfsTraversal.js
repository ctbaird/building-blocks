import { buildBinaryTree } from "./buildBinaryTree.js";

const visit = (node) => {
  console.log(node);
};

const bfsTraversal = (root) => {
    if(root != null){
        const queue = [];
        queue.push(root);
        while(queue.length > 0){
            node = queue.shift();
            visit(node);
            if(node.left != null){
              queue.push(node.left);
            }
            if(node.right != null){
              queue.push(node.right);
            }
        }
    }
};

const arr = [1,2,3,4,5,6,7];
const tree = buildBinaryTree(arr,0);

bfsTraversal(tree);
