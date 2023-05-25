//public protected private readonly

class Birds{

    protected bName:string;
    protected age: number;
    
    constructor(bName:string,age:number){
        this.age = age;
        this.bName = bName;
    }

    getBirds(){
        console.log(this.bName+" "+this.age);
    }
    setBirds(name:string){
        this.bName = name

    }
}

let bird = new Birds('pigeon',2);

bird.getBirds();
bird.setBirds('Crow');
bird.getBirds()


