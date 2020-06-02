class Queue {
				constructor() {
					this.queue = []
					this.length = 0
				}
				Add(num) {
					let el = this.queue.push(num)
					this.length++
					return el
				}
				Del() {
					if (this.length == 0) {
						throw new Error("当前队列为空队列，不能进行删除操作！")
					}
					let el = this.queue.unshift()
					this.length--
					return el
				}
				IsEmpty() {
					return this.length === 0
				}
				ToString() {
					var str = ''
					for (var i = 0; i < this.length; i++) {
						str += this.queue[i]
					}
					return str
				}
				Size() {
					return this.length
				}
				Front() {
					return this.queue[0]
				}
				array(){
					return this.queue
				}
			}