class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    const node = new Node(data);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(node);
    }
  }

  removeNode() {}

  insertNode(node, current = this.root) {
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
        this.insertNode(node, current.right)
      }
    }
  }
}

(() => {
  const node = new BST();
  node.addNode(5);
  node.addNode(3);
  node.addNode(4);
  node.addNode(6);
  node.addNode(7);
  console.log(JSON.stringify(node));
})();