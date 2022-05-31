import { TreeNode } from "./treenode.js";

export class BinarySearchTree<T> {

    public head: TreeNode<T> | undefined;

    comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    public insert(data: T): TreeNode<T> | undefined {
        if (!this.head) {
            this.head = new TreeNode(data);
            return this.head;
        }
        let current = this.head;
        while (true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new TreeNode(data);
                    return current.right;
                }
            } else {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new TreeNode(data);
                    return current.left;
                }
            }
        }
    }

    public search(data: T): TreeNode<T> | undefined {
        if (!this.head) return undefined;
        let current = this.head;
        while (this.comparator(data, current.data) !== 0) {
            if (this.comparator(data, current.data) === 1) {
                if (!current.right) return;
                current = current.right;
            } else {
                if (!current.left) return;
                current = current.left;
            }
        }
        return current;
    }

    public remove(head: TreeNode<T> | undefined, data: T): TreeNode<T> | undefined {
        let parent = undefined;
        let current = head;

        while (current != undefined && current.data != data)
        {
            parent = current;
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }

        if (current == undefined) {
            return head;
        }

        // Case 1: node to be deleted has no children
        if (current.left == undefined && current.right == undefined)
        {
            if (current != head && parent != undefined)
            {
                if (parent.left == current) {
                    parent.left = undefined;
                }
                else {
                    parent.right = undefined;
                }
            }
            else {
                head = undefined;
            }
        }

        // Case 2: node to be deleted has two children
        else if (current.left != undefined && current.right != undefined)
        {
            let successor = this.getMinimumKey(current.right);
            let val = successor.data;
            this.remove(head, successor.data);
            current.data = val;
        }

        // Case 3: node to be deleted has only one child
        else {
            let child = (current.left != undefined) ? current.left : current.right;
            if (current != head && parent != undefined) {
                if (current == parent.left) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            }
            else {
                head = child;
            }
        }
    }
    private getMinimumKey(curr: TreeNode<T>): TreeNode<T>{
            while (curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }

    public inOrderTraversal(node: TreeNode<T> | undefined): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }

    public preOrderTraversal(node: TreeNode<T> | undefined): void {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    public postOrderTraversal(node: TreeNode<T> | undefined): void {
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    }

}

