// Destructuring

const arrDes =[10,20,30,40,50]

const [a,b,c,d,e] = arrDes;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// slice in array 

let arr= [10,20,30,40,50,60]

// const slicedArr = arrSlice.slice()
console.log(arr.join(" ")); 
console.log(arr.includes(78));// false
console.log(arr.indexOf(10,2));// 5
console.log();// false

// higher order methods (for each (), map())

const mapped =arr.map((element,index)=>{
    return(`index: ${index} , value: ${element}`);
    
})
console.log(mapped);


