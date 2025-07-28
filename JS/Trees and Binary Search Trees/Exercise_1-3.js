class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  insertNode(newVal) {
    //  newVal = newVal.toUpperCase(); // make case-insensitive
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(val) {
    // val = val.toUpperCase(); // normalize for case-insensitivity
    if (this.value === val) {
      console.log("true");
      return true;
    } else if (val > this.value && this.rightChild) {
      return this.rightChild.findNode(val);
    } else if (val <= this.value && this.leftChild) {
      return this.leftChild.findNode(val);
    }
    console.log("false");
    return false;
  }

  findCommonParent(val1, val2) {
    if (this.value === null) return null;
    // If both are smaller → left subtree
    if (val1 < this.value && val2 < this.value && this.leftChild) {
      return this.leftChild.findCommonParent(val1, val2);
    }
    // If both are greater → right subtree
    if (val1 > this.value && val2 > this.value && this.rightChild) {
      return this.rightChild.findCommonParent(val1, val2);
    }
    // One on each side or one equals current → this is the LCA
    console.log(this.value);
    return this.value;
  }

removeNode(parent, value) {
  if (value < this.value && this.leftChild) {
    this.leftChild.removeNode(this, value);
  } else if (value > this.value && this.rightChild) {
    this.rightChild.removeNode(this, value);
  } else if (value === this.value) {
    // Case 1: No children
    if (!this.leftChild && !this.rightChild) {
      if (parent.leftChild === this) parent.leftChild = null;
      else parent.rightChild = null;
    }
    // Case 2: One child
    else if (this.leftChild && !this.rightChild) {
      if (parent.leftChild === this) parent.leftChild = this.leftChild;
      else parent.rightChild = this.leftChild;
    } else if (!this.leftChild && this.rightChild) {
      if (parent.leftChild === this) parent.leftChild = this.rightChild;
      else parent.rightChild = this.rightChild;
    }
    // Case 3: Two children
    else {
      // Find max in left subtree
      let maxParent = this;
      let maxNode = this.leftChild;
      while (maxNode.rightChild) {
        maxParent = maxNode;
        maxNode = maxNode.rightChild;
      }

      this.value = maxNode.value; // Replace current value with max

      // Remove maxNode from its original place
      if (maxParent.leftChild === maxNode) {
        maxParent.leftChild = maxNode.leftChild;
      } else {
        maxParent.rightChild = maxNode.leftChild;
      }
    }
  }
  return this;
}

}


const letters = ["H", "E", "S", "G", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach((letter) => bSTree.insertNode(letter));

console.log(bSTree);
//Use the following to test
bSTree.findNode("H"); // should print true
bSTree.findNode("G"); // should print true
bSTree.findNode("Z"); // should print false
bSTree.findNode("F"); // should print false
bSTree.findNode("y"); // should print false - we didn't make the tree case sensitive!

const newLetters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
let bSTree2 = new BSNode();
newLetters.forEach((letter) => bSTree2.insertNode(letter));

bSTree2.findCommonParent("B", "I"); //should return "H"
bSTree2.findCommonParent("B", "G"); //should return "E"
bSTree2.findCommonParent("B", "L"); //should return "J"
bSTree2.findCommonParent("L", "Y"); //should return "R"
bSTree2.findCommonParent("E", "H"); //should return "J"


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree, the 9 will be deletied
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree, the root will be 5)