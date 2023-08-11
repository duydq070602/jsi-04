const arr1 = [1, 'a', 5, '2', true];

arr1.forEach((element) =>{
    console.log(element);
});


const products = [
	{ name: 'Iphone 13', price: 1000, quantity: 10 },
	{ name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ name: 'Airpod 2', price: 100, quantity: 20 },
]
let sum = 0;
const abc = (name, price, quantity) =>{
    products.forEach((element) => {
        console.log(`${element.quantity} chiếc ${element.name} giá ${element.price}$`)
        sum+=element.price;
    });
    console.log(`Tổng hóa đơn: ${sum}$`);
}
abc();


let students = [
	{ name: 'Alex', score: 6 },
	{ name: 'John', score: 8 },
	{ name: 'Peter', score: 4 },
];



let sc = 0;
let nm = "";
const HighScore = ((score) =>{
    students.forEach(element => {
        if(element.score > sc) {
            sc = element.score;
            nm = element.name;
        }
    });
    console.log(`Điểm cao nhất: ${nm} ${sc}`);
})
HighScore();