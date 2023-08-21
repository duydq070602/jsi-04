const h1Elm = document.getElementById('title');
console.log(h1Elm);

h1Elm.classList.add('small-text');

const arr1 = [0, 1, 2, 3, 4, 5];


const x = document.getElementById('wrapper-box');

const renderList = (arr) => {
    let child = x.lastElementChild;
    x.innerHTML = "";
    arr.forEach((item) =>{
        const m = document.createElement('div');
        m.classList.add('box');
        m.textContent = item;
        x.appendChild(m);
    
    })
} 
// const renderList = (arr) => {
//     // Xoa het phan tu con cua wrapperElm
//     wrapperElm.innerHTML = "";
//     // Render list
//     arr.forEach((item) => {
//       const divElm = document.createElement('div');
//       divElm.classList.add('box');
//       divElm.textContent = item;
//       wrapperElm.appendChild(divElm);
//     })
//   }

renderList(arr1);

const y = document.getElementById('click');

const handleFilterNumber = ()=>{
    const arr2 = arr1.filter((number)=> number%2 !==0);
    renderList(arr2);
}

y.addEventListener('click',handleFilterNumber);


