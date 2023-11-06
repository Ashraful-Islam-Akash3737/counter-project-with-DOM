
const counter = document.getElementById('counter-value')
const counterPlus = document.getElementById('counter-plus');
const counterMinus = document.getElementById('counter-minus');
let count = 0;
counterPlus.addEventListener('click', function () {
    count += 1;
    counter.innerText = count;
    
})
counterMinus.addEventListener('click', function () {
    count -= 1;
    counter.innerText = count;
    
})
