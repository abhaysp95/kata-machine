type QNode<T> = {
	value: T,
	next?: QNode<T>,
}

export default class Queue<T> {
    public length: number;

	private head?: QNode<T>
	private tail?: QNode<T>

    constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
    }

	enqueue(item: T): void {
		this.length++;
		const node = { value: item } as QNode<T>;
		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		this.tail.next = node;
		this.tail = this.tail.next;
	}

	deque(): T | undefined {
		if (!this.head) {
			return undefined;
		}

		let res_head = this.head;
		this.head = this.head?.next;
		if (!this.head) {
			this.tail = this.head;
		}
		res_head.next = undefined // free here (if C)

		this.length--;
		return res_head?.value
	}
	peek(): T | undefined {
		return this.head?.value
	}
}
