interface catInfo{
    age:number
    breed:string
}
type catName = 'miffy'| 'princee' | 'mordred';

const cats :Record<catName,catInfo>= {
    miffy:{age:2,breed:'kndem'},
    princee:{age:3,breed:'bdsigu'},
    mordred:{age:3,breed:'hjiui'}

}
console.log(cats)