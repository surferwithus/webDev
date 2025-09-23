export class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // append
    append(data: T): void {
        let newNode = new Node<T>(data);

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    delete(data: T): void {
        let currentNode = this.head;
    
        // 삭제할 노드 찾기
        while (currentNode && currentNode.data !== data) {
            currentNode = currentNode.next;
        }
        if (!currentNode) return; // 못 찾으면 종료
    
        // head 삭제
        if (currentNode === this.head) {
            this.head = currentNode.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // 리스트가 비었음
            }
        }
        // tail 삭제
        else if (currentNode === this.tail) {
            this.tail = currentNode.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        // 중간 노드 삭제
        else {
            if (currentNode.prev) currentNode.prev.next = currentNode.next;
            if (currentNode.next) currentNode.next.prev = currentNode.prev;
        }
    }
    

    // size
    size(): number {
        let currentNode;
        if (this.head) {
            currentNode = this.head;
        }
        else return 0;

        let cnt = 0;
        while (currentNode) {
            cnt++;
            currentNode = currentNode.next;
        }

        return cnt;
    }

    // printList
    printList(): T[] {
        let currentNode;
        let lst = [];

        if (this.head) {
            currentNode = this.head;
        }
        else return [];

        while (currentNode) {
            lst.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return lst;
    }

    // printListReverse
    printListReverse(): T[] {
        let currentNode;
        let lst = [];

        if (this.tail) {
            currentNode = this.tail;
        }
        else return [];

        while (currentNode) {
            lst.push(currentNode.data);
            currentNode = currentNode.prev;
        }

        return lst;
    }

    // search
    search(data: Node<T>): number | null {
        let currentNode;
        let index = 1;

        if (this.head) {
            currentNode = this.head;
        }
        else return null;

        while (currentNode.next) {
            if (currentNode.data != data) {
                currentNode = currentNode.next;
                index++;
            }
            else {
                return index;
            }
        }
        return null;
    }

    // getFirst
    getFirst(): T | null {
        return this.head ? this.head.data : null;
    }

    // getLast
    getLast(): T | null {
        return this.tail ? this.tail.data : null;
    }

}

class Node<T> {
    public prev: Node<T> | null = null;
    public data: T;
    public next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}