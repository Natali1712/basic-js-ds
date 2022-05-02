const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootNode = null
  }

  root() {

    return this.rootNode;
  }

  add(data) {


    let newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode)
    }
  }

  insertNode(node, newNode) {

    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }


  }

  has(data, node = this.rootNode) {


    if (!node) return false;
    if (node.data === data) return true;

    if (data < node.data) {
      return this.has(data, node.left)
    } else {
      return this.has(data, node.right)
    }
  }

  find(data, node = this.rootNode) {

    if (!node) return null;
    if (node.data === data) return node;

    if (data < node.data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  remove(data, node = this.rootNode) {

    if (!node) return null;
    if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;
    } else if (node.data < data) {
      node.right = this.remove(data, node.right);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }


      if (!node.left) {
        node = node.right;
        return node;
      }


      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRightNode = node.right;

      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }

      node.data = minRightNode.data;
      node.right = this.remove(minRightNode.data, node.right);

      return node;
    }
  }

  min() {

    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {

    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
