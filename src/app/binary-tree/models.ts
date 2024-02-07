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

    // private removeFromTree(data: number, node: Node) {
    //     if (!node) {
    //         return null;
    //     }

    //     if (node.data === data) {
    //         if (!node.leftBranch && !node.rightBranch) {
    //             return null;
    //         }


    //     }


    //     if (data < node.data) {
    //         if (node.leftBranch) {
    //             this.addToTree(data, node.leftBranch);
    //         } else {
    //             node.leftBranch = new Node(data);
    //         }
    //     } else if (data > node.data) {
    //         if (node.rightBranch) {
    //             this.addToTree(data, node.rightBranch);
    //         } else {
    //             node.rightBranch = new Node(data);
    //         }
    //     }
    // }

    add(data: number) {
        const node = this.root;

        if (node) {
            this.addToTree(data, node);
        } else {
            this.root = new Node(data);
        }
    }

    findMin() {
        let current = {...this.root};
        while (current.leftBranch) {
            current = current.leftBranch;
        }
        return current.data;
    }

    findMax() {
        let current = {...this.root};
        while (current.rightBranch) {
            current = current.rightBranch;
        }
        return current.data;
    }

    find(data: number) {
        let current: Node | null = {...this.root} as Node;
        if (!current || !current.data) {
            return null;
        }

        while(current?.data && current.data !== data) {
            if (current.data < data) {
                current = current.leftBranch;
            } else {
                current = current.rightBranch;
            }
        }
        return current?.data === data ? current.data : null;
    }

    remove(data: number) {

    }
}
