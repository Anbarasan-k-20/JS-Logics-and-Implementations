
// count charecter 

const countChar =(str)=>{
    const charList = {}
    for(let char of str){
        if (charList[char]) {
            charList[char]++
        }else{
            charList[char]=1;
        }
    }
    return charList;
}

console.log(countChar("the values"));

// let a = "hello"

// console.log(a.split())

let a = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, placea";
b= a.split()
console.log(a);
console.log(b);
