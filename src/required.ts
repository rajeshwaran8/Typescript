interface animal{
    name:string;
    place ? :string;
}

const ani:Required<animal> = {
    name:'Elephant',
    place:'Mundanthurai'
}
console.log(ani);
