// is pallindrom

function reverseStr(str){
    let concat="";
    for(let i = str.length-1;i>=0;i--){
        
        concat+=str[i];
    }
    console.log(concat);
}
reverseStr("isPallindrome")

// count No Of Char

function findCount(str){
    const charList = {s};
    for(const char of tr){
        if(charList[char]){
            charList[char]++;
        }else{
            charList[char]=1;
        }
    }
    return charList;
}

console.log(findCount("WordCount"));

// for in and for of loop
// try 1
// let val = "Javascript"

// for( let i = 0 ; i < val.length; i++){
//     console.log(val[i]);
// }

// const arr =[10,20,30,40,50]
// //try-2
// for( let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// try -2 spread Vs rest

const arr = ["car","bike", "truck"]
const arr2 = ["lorry","ship", "boat"]
const rest = [...arr,...arr2]
rest[2] ="helicopter"
console.log(arr);
console.log(arr2);
console.log(rest);

const restPaream = (...parm)=>{
    console.log(parm);
                            // important notes : rest parameter can be used to access multiple values in the form of array or object 
}
restPaream(1,2,3,4,5,6)                
