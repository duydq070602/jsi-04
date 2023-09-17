// Cho array sau:
const todos = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
  ]

const x = document.getElementById('inner-main');


const adu = todos.forEach((item)=>{
    const n = document.createElement('div');
    n.classList.add('task');
    n.textContext = item.title;
    console.log(n);
  })





const in4 = document.getElementById('inp');
const clc = document.getElementById('btn');

const click = (arr) => {
  arr.forEach(()=>{
    const m = document.createElement('div');
    m.classList.add('line');
    m.textContent = in4;
    x.appendChild(m);
  })

}


clc.addEventListener('btn', click);

