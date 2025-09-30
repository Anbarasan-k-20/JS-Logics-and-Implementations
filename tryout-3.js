// find and filter methods
let employees=[
    {name:"senthil",age:21,salary: 24000},
    {name:"guna",age:20,salary: 20000},
    {name:"velu",age:21,salary: 18000},
    {name:"thambi",age:21,salary: 24000}
]
const filteredData = employees.filter((data)=>{
    return data.salary<=20000
})
console.log(filteredData);

let findMethod = employees.find((data=>{
    return data.name=="velu"
}));
console.log(findMethod);


// this function

const tryThish =(name)=>{
    return {
        name,
        greet: function(){
            console.log(`${this.name} Hello World !`);
        }
    }
}
const callThis = tryThish("anbu");
callThis.greet()