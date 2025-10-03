export class Queue<T> {
    private items: T[] = [];
    private isStack: boolean = false;
    
    // stack
    push(data: T): void {
        this.isStack = true;
        this.items.push(data);
    }

    pop(data: T): T | undefined {
        if (!this.isStack) {
            throw new Error('pop은 stack일 때만 사용 가능합니다.');
        }
        return this.items.pop();
    }

    top(): T | undefined {
        if (!this.isStack) {
            throw new Error('top은 stack일 때만 사용 가능합니다.');
        }
        return this.items[this.items.length - 1];
    }

    // queue
    enqueue(data: T): void {
        this.isStack = false;
        this.items.push(data);
    }

    dequeue(data: T): T | undefined {
        if (this.isStack) {
            throw new Error('dequeue는 queue일 때만 사용 가능합니다.');
        }
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    get size(): number {
        return this.items.length;
    }
}