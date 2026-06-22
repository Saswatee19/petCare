let bird = document.querySelector(".bird");
let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");

let tm1 = setTimeout(()=>{
    bird.style.display = "none"
}, 500);

let tm2 = setTimeout(()=>{
    dog.style.display = "flex"
}, 500);

let tm3 =setTimeout(()=>{
    dog.style.display = "none"
}, 1000);

let tm4 = setTimeout(()=>{
    cat.style.display = "flex"
}, 1000);


let preloader = document.querySelector(".preloader");

setTimeout(()=>{
    preloader.classList.add('preloader-hidden');
}, 2000)
