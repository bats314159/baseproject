// tree-utils.js

/**
 * Represents a node in a tree.
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

/**
 * Represents a tree data structure.
 */
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }

    addNode(value, parentNodeValue) {
        const parentNode = this.findNode(this.root, parentNodeValue);
        if (parentNode) {
            const newNode = new TreeNode(value);
            parentNode.addChild(newNode);
        }
    }

    findNode(node, value) {
        if (node.value === value) return node;
        for (const child of node.children) {
            const result = this.findNode(child, value);
            if (result) return result;
        }
        return null;
    }

    traverseDFS(callback) {
        this._traverseDFS(callback, this.root);
    }

    _traverseDFS(callback, node) {
        callback(node);
        for (const child of node.children) {
            this._traverseDFS(callback, child);
        }
    }
}

// Exporting Tree and TreeNode classes
module.exports = { Tree, TreeNode };