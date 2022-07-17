import BST from "./bst";
/*
*  balance factor = height of left subtree - height of right subtree  *
*/
class AVLTree extends BST {
  BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_RIGHT: 5
  };

  constructor() {
    this.#root = null;


  }

  getNodeHeight(node) {
    return node === null ? -1 : Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return this.BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return this.BalanceFactor.UNBALANCED_LEFT;
      default:
        return this.BalanceFactor.BALANCED;
    }
  }

}

const tree = new AVLTree();