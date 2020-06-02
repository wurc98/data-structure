class Set{
				 constructor() {
				     this.items = {}
				 }
				 add(value){
					 if(this.has(value)){
						 return false
					 }
					 this.items[value]=value
				 }
				 has(value){
					 return this.items.hasOwnProperty(value)
				 }
				 remove(value){
					 if(this.has(value)){
						 delete this.items[value]
						return true
					 }
					 return false
				 }
				 clear(){
					 this.items={}
				 }
				 size(){
					 return Object.key(this.items).length
				 }
				 values(){
					 return Object.keys(this.items)
				 }
				 
			 }