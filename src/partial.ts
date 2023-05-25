interface Person {
    name: string;
    age: number;
    location?: string;
  }

  let pp : Partial<Person> = {

    age:13
  }

  console.log(pp);
  