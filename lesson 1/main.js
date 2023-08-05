const arrNumber = [1,2,3,4,5];

const student = {
    name: 'a',
    age: '7',
}
student.school = 'ot';


function log(){
    console.log(student.name);
    const tmp = 1;
    console.log(tmp);
}


const log1 = (name, age) =>{
    //template literal
    console.log(`Ten: ${name}; Tuoi: ${age}`);
}
log1("Duy","15");


// const count = (a,b) =>{
//     return a+b;
// }
const count = (a,b) => a+b;

const result = count(2,3);
console.log(result);

const arr1 = [1,2,3];
const arr2 = [...arr1];
//spread operator
arr2.push(4);

const obj1 = {
    name:'buno',
    age: 26,
}

 const obj2 = {...obj1, work:'mu'};

// console.log(obj1);
// console.log(obj2);

const arr3 = [1,2,3,4,5];
arr3.forEach( (item) => {
    console.log(item);
});