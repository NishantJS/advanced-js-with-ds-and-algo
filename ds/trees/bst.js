class Node{
  data; left; right;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  #root;
  constructor() {
    this.#root;
  }

  addNode(data = 5) {
    const node = new Node(data);

    if (!this.#root) {
      this.#root = node;
    } else {
      this.insertNode(node);
    }
  }

  insertNode(node, current = this.#root) {
    if (node.data == current.data) return;

    if (node.data < current.data) {
      if (!current.left) {
        current.left = node;
      } else {
        this.insertNode(node, current.left);
      }
    } else {
      if (!current.right) {
        current.right = node;
      } else {
        this.insertNode(node, current.right);
      }
    }
  }

  inorder(node, arr=[]) {
    if (node) {
      this.inorder(node.left,arr);
      arr.push(node.data);
      this.inorder(node.right,arr);
    }
    return arr.filter(e=>e)
  }

  preorder(node,arr=[]) {
    if (node) {
      arr.push(node.data)
      this.preorder(node.left,arr);
      this.preorder(node.right,arr);
    }
    return arr.filter(e=>e)
  }

  postorder(node,arr=[]) {
    if (node) {
      this.postorder(node.left,arr);
      this.postorder(node.right,arr);
      arr.push(node.data)
    }
    return arr.filter(e => e);
  }

  getRoot() {
    return this.#root;
  }
}


const bst = new BinarySearchTree();
bst.addNode(100);
bst.addNode(20);
bst.addNode(200);
bst.addNode(10);
bst.addNode(30);
bst.addNode(150);
bst.addNode(300);
let inorder = bst.inorder(bst.getRoot());
let preorder = bst.preorder(bst.getRoot());
let postorder = bst.postorder(bst.getRoot());

// console.log(bst.getRoot());
console.log({ inorder, preorder, postorder });
