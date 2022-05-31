import * as readlineSync from "readline-sync";
import {BinarySearchTree} from "./binarytree.js";

export class ReadlineSync {

    public static askAboutInsert(bsTree: BinarySearchTree<any>): void {
        if (readlineSync.keyInYN('Do you want to insert a new node?')) {
            // 'Y' key was pressed.
            const newNode = readlineSync.question('Insert a number.');
            bsTree.insert(Number(newNode));
            console.log('Node ' + newNode + ' has been added.');
            ReadlineSync.askAboutSearch(bsTree);
        } else {
            ReadlineSync.askAboutSearch(bsTree);
        }
    }

    public static askAboutSearch(bsTree: BinarySearchTree<any>): void {
        if (readlineSync.keyInYN('Do you want to find a node?')) {
            // 'Y' key was pressed.
            const node = readlineSync.question('Insert a number.');
            const foundNode = bsTree.search(Number(node));
            console.log(foundNode);
            ReadlineSync.askAboutTraversal(bsTree);
        } else {
            ReadlineSync.askAboutTraversal(bsTree);
        }
    }

    public static askAboutTraversal(bsTree: BinarySearchTree<any>): void {
        if (readlineSync.keyInYN('Do you want to traverse the binary tree?')) {
            // 'Y' key was pressed.
            bsTree.inOrderTraversal(bsTree.head);
            ReadlineSync.askAboutRemove(bsTree);
        } else {
            ReadlineSync.askAboutRemove(bsTree);
        }
    }

    public static askAboutRemove(bsTree: BinarySearchTree<any>): void {
        if (readlineSync.keyInYN('Do you want to delete a node?')) {
            // 'Y' key was pressed.
            const node = readlineSync.question('Insert a number.');
            bsTree.remove(bsTree.head,node);
            console.log('Node ' + node + ' has been deleted.');
            ReadlineSync.askAboutTraversal(bsTree);
        } else {
            ReadlineSync.askAboutInsert(bsTree);
        }
    }

}