class Stack {
	constructor() {
		this.list = [];
		this.length = 0;
	}
	isEmpty() {
		return this.length === 0;
	}
	Push(el) {
		this.list.push(el);
		this.length = this.list.length
		return this.list
	}
	Pop() {
		let pop = this.list.pop();
		this.length = this.list.length
		return pop;
	}
	Peek() {
		return this.list[this.length - 1]
	}
	Size() {
		return this.length
	}
	ToString() {
		let res = ''
		for (var i = 0; i < this.length; i++) {
			res += this.list[i]
		}
		return res
	}
}
