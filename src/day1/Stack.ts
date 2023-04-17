type SNode<T> = {  // think of stack as backward linked list, a<-b<-c<-d<-e (head being 'e' and e.prev = d)
	value: T,
	prev?: SNode<T>,
}

export default class Stack<T> {
    public length: number;

	private head?: SNode<T>;
	// stack will not need tail, cause stack only performs operations from one end

	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	push(item: T): void {
		this.length++;

		const node = { value: item } as SNode<T>;
		if (!this.head) {
			this.head = node;
			return;
		}

		node.prev = this.head;
		this.head = node;
	}

	pop(): T | undefined {
		if (!this.head) {
			return undefined
		}

		this.length--;
		const node = this.head;
		this.head = this.head.prev;
		node.prev = undefined; // free node here

		return node.value;
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
