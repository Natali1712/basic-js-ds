const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
function insertNode (node, newNode) {
  if (newNode.data < node.data) {
    if (!node.left) node.left = newNode;
    else insertNode(node.left, newNode);
    return;
  }

  if(!node.right) node.right = newNode;
  else insertNode(node.right, newNode);
}

function hasNode (node, data) {
  if (!node) return false;
  if (data === node.data) return true;
  if (data < node.data) return hasNode(node.left, data);
  if (data > node.data) return hasNode(node.right, data);
}

function findNode (node, data) {
  if (!node) return null;
  if (data === node.data) return node;
  if (data < node.data) return findNode(node.left, data);
  if (data > node.data) return findNode(node.right, data);
}

function removeNode (node, data) {
  if(!node) return null;

  if(data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }

  if(data > node.data) {
    node.right = removeNode(node.right, data);
    return node;
  }

  if(!node.left && !node.right) {
    node = null;
    return node;
  }

  if(!node.left) {
    node = node.right;
    return node;
  }

  if(!node.right) {
    node = node.left;
    return node;
  }

  const min = minNode(node.right);
  node.data = min.data;
 
  node.right = removeNode(node.right, min.data);
  return node;
}

function minNode(node) {
  if(!node.left) return node;
  else return minNode(node.left);
}

function maxNode(node) {
  if(!node.right) return node;
  else return maxNode(node.right);
}

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) this.rootNode = newNode;
    else insertNode (this.rootNode, newNode);
  }

  has(data) {
    return hasNode(this.rootNode, data);
  }

  find(data) {
    return findNode (this.rootNode, data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    return minNode (this.rootNode).data;
  }

  max() {
    return maxNode (this.rootNode).data;
  }
}
module.exports = {
  BinarySearchTree
};
