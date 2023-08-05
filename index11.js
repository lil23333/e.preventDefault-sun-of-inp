let a = document.querySelector('a');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let p = document.querySelector('p');
a.addEventListener('click', function (e) {
    a.textContent += "!!!!!!!!!!!!!!!!!"
e.preventDefault();
console.log('cant do that')
});
p.addEventListener('click', function (){
    p.textContent += +(inp1.value) + +(inp2.value);
});