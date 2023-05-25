abstract class Pers{

    abstract name:string;
    abstract getPerson():void;
}

class Students extends Pers{
    name: string;

    constructor(name:string) {
        super()
        this.name = name
    }
    getPerson(): void {
        console.log(`${this.name} is a Student`)
    }
}
let st = new Students('rajeshwaran');
st.getPerson()