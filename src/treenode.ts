export class TreeNode<T> {
    public data: T;
    public left?: TreeNode<T>;
    public right?: TreeNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

