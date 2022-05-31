import {BinarySearchTree} from "./binarytree.js";
import {ReadlineSync} from "./readlinesync.js";

function comparator(a: number, b: number) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const bsTree = new BinarySearchTree(comparator);

//добавление элементов в дерево
bsTree.insert(30);
bsTree.insert(20);
bsTree.insert(40);
bsTree.insert(70);
bsTree.insert(60);
bsTree.insert(80);

//извлечение элемента по ключу
console.log(bsTree.search( 70));
console.log(bsTree.search( 80));

//удаление элемента по ключу
bsTree.remove(bsTree.head,20);

//обход дерева
bsTree.inOrderTraversal(bsTree.head);
//bsTree.preOrderTraversal(bsTree.head);
//bsTree.postOrderTraversal(bsTree.head);

//работа через консоль
ReadlineSync.askAboutInsert(bsTree);


