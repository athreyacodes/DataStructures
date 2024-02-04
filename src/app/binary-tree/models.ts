export class Node {
    data: number;
    leftBranch: Node | null;
    rightBranch: Node | null;

    constructor(data: number, leftBranch = null, rightBranch = null) {
        this.data = data;
        this.leftBranch = leftBranch;
        this.rightBranch = rightBranch;
    }


};

export class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    private addToTree(data: number, node: Node) {
        if (data < node.data) {
            if (node.leftBranch) {
                this.addToTree(data, node.leftBranch);
            } else {
                node.leftBranch = new Node(data);
            }
        } else if (data > node.data) {
            if (node.rightBranch) {
                this.addToTree(data, node.rightBranch);
            } else {
                node.rightBranch = new Node(data);
            }
        }
    }

    add(data: number) {
        const node = this.root;

        if (node) {
            this.addToTree(data, node);
        } else {
            this.root = new Node(data);
        }
    }
}
