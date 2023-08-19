// //1
arr1 = [1,2,4,5,6]; arr2 = [1,6,8,9,0]; arr3=[];
const trung = arr1.forEach((num1) =>{
    arr2.forEach((num2)=>{
        if(num1 == num2) arr3.push(num1);
    })
})
console.log(arr3);

// for(let i = 0; i< arr1.length; i++){
//     for( let j =0; j<arr2.length; j++){
//         if(arr1[i]==arr2[j]) console.log(arr1[i]);
//     }
// }



//2

newArr = [];
arr = [1,54,6,7];
const sim = arr.map((number)=>{
    newArr.push(number+5);
})
console.log(newArr);

//3
m = [1,2,4,5,6,7]; n = [3,5,675,8,96]; p=[];
const loc = m.filter((num1) => {
    n.filter((num2)=>{
        if(num1 ===1 && num1 ===7 && num1 === 96 && num1 === 8 && num1 === 10) return false;
        if(num2 ===1 && num2 ===7 && num2 === 96 && num2 === 8 && num2 === 10) return false;
    })
    
})
console.log(loc);


const nw = m.filter((num1) =>{
    return num1 !=1 && num1 !=7 && num1 != 96 && num1 != 8 && num1 != 10;
})
let nx = nw;
const ne = n.filter((num2) =>{
    return num2 !=1 && num2 !=7 && num2 != 96 && num2 != 8 && num2 != 10;
})
let ny = ne;
console.log(nx,ny);
//4

players = [
    { id: 11, name: 'Messi', age: 33 },   
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },]
    
playersModified =[];
const min = players.forEach((mini)=>{
    playersModified.push(mini);
})
console.log(playersModified)