function sum(a,b){
    console.log(a+b);
};
sum(3,4);
//arrow function
//ham khong co ten


const sum1 = (a,b) =>{
    return a+b;
}
let x = sum1(1,2);
console.log(x);

//map: in ra các phần tử của mảng, k liên quan đến mảng ban đầu

const array = [2,3,4,5];
console.log(array);
const array2 = array.map((number)=>{
    return number+1;
})
console.log(array2);

//filter
const array3 = array.filter((number) =>{
    return number %2 == 0;
})
console.log(array3);

// const arrayN = array.filter((number) =>{
//     if(number%2 === 0 ){
//         return true;
//     }
//     return false;
// })
// console.log(arrayN);

const arrayX = array.filter((number) => number%2 ===0);



//forEach

var Language = ['Javascript', 'HTML', 'CSS'];
const array5 = Language.forEach((Language) =>{
    console.log(Language);
})

//1: number
//'2': string
//true: boolean
const arr1 = [1, 'a', 5, '2', true];
const num = arr1.filter((element)=>{
    if(typeof element === 'number'){
        return element;
    }
})

const student = {
    name: 'Duy',
    age: 16,
    school: "MU",
}

console.log(student.age);

const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]

let s = 0;
const tong = products.forEach((product)=>{
    const sum =  product.quantity * product.price;
    s+= sum;
    console.log(sum);
})
console.log(s);

const score = [];
const scores = [80, 95, 75, 60, 85];
const scr = scores.forEach((number)=>{
    if(number > 70) score.push(number);
})
console.log(score);

const scr1 = scores.filter((number) =>{
    return number> 70;
})
let y = scr1;
console.log(y);

//let và const
// const age = 10;
// age = 11;
// console.log(age);

// let age = 10;
// age = 11;
// console.log(age);