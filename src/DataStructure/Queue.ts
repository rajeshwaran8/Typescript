	class Queue {
         items:number[] = [];
         backIndex:number;
         frontIndex:number ;

         
		constructor() {
			this.items = [];
            this.backIndex = 0;
            this.frontIndex = 0;
        
        }

        enqueue(element:any){

            this.items[this.backIndex] = element;
             this.backIndex++;
             return element;
        }
        dequeue(){
          let item =  this.items[this.frontIndex];
          delete  this.items[this.frontIndex];
          this.frontIndex++;
          return item;
        }

        FirstElement(){

            return this.items[this.frontIndex]
        }
        isEmpty(){
            return this.items.length === 0
        }
        clear(){
            return this.items = []
        }

        getQueue(){
            return this.items
        }
    }
    let qu = new Queue();

    let aa =  [8,2,3,5,677,7,8]

    for (let index = 0; index < aa.length; index++) {

        qu.enqueue(aa[index])
    }
    console.log(qu.getQueue()+"")


     qu.dequeue()
     console.log(qu.getQueue()+"")

     qu.enqueue(93)
     console.log(qu.getQueue()+"")

    console.log(`the first element is ${qu.FirstElement()}`)

    console.log(qu)
    
        qu.clear()

    console.log(qu.isEmpty())