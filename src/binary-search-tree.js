const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootelement = null;
  }
  root() {
    return this.rootelement;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.rootelement === null)
        this.rootelement = newNode;
    else
        addNode(this.rootelement, newNode);

   function addNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
                node.left = newNode;
            else
                addNode(node.left, newNode);
        }
        else
        {
            if(node.right === null)
                node.right = newNode;
            else
                addNode(node.right, newNode);
        }
    }
  }

  has(data) {
   if (this.find(data)) return true;
   else return false
  }

  find(data) {
    if (!this.rootelement) return null;
    let current = this.rootelement;
    const search = true;
    while (search) {
      if (!current) return null;
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove(data) {

    this.rootelement = removeNode(this.rootelement, data);

function findMinNode(node)
{
    if(node.left === null)
        return node;
    else
        return findMinNode(node.left);
}

function removeNode(node, key)
{
    if(node === null)
        return null;
    else if(key < node.data)
    {
        node.left = removeNode(node.left, key);
        return node;
    }
    else if(key > node.data)
    {
        node.right = removeNode(node.right, key);
        return node;
    }
    else
    {
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }

        let storage = findMinNode(node.right);
        node.data = storage.data;
 
        node.right = removeNode(node.right, storage.data);
        return node;
    }
 
  }
  }
  min() {
    function findMin(node){
      if(!node) return null;
      let el = node.data;
      let lel = findMin(node.left);
      let rel = findMin(node.right);
 
      if (lel < el && lel != null)
          el = lel;
      if (rel < el && rel != null)
          el = rel;
      return el;
      }
     return findMin(this.rootelement);
  }

  max() {
    function findMax(node){
      if(!node) return null;
      let res = node.data;
      let lres = findMax(node.left);
      let rres = findMax(node.right);
 
      if (lres > res)
          res = lres;
      if (rres > res)
          res = rres;
      return res;
      }
     return findMax(this.rootelement);
  }
}

module.exports = {
  BinarySearchTree
};