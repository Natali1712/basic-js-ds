const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = added(this.root1, data)

    function added(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (node.data === data) {
        return data;
      }
      if (data < node.data) {
        node.left = added(node.left, data);
      } else if (data > node.data) {
        node.right = added(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return search(this.root1, data)

    function search(node, data) {
      if (node === null) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return search(node.left, data)
      } else if (data > node.data) {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return search(this.root1, data)

    function search(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return search(node.left, data)
      } else if (data > node.data) {
        return search(node.right, data)
      }
    }
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root1) {
      return undefined;
    }
    let node = this.root1;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1) {
      return undefined;
    }
    let node = this.root1;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
