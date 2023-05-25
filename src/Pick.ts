interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const per : Pick<Person,'name'|'location'> = {
     
    name:'Rajesh',
    location:'Avadi',
  }
  console.log(per);
  