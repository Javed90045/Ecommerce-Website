// Script for navigation bar
// right side navbar toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

// right side navbar close button
const close = document.getElementById('close');
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}