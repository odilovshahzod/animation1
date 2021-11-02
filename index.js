window.addEventListener('DOMContentLoaded',function(){
let scrol=document.querySelectorAll('.box');
let non=document.querySelector('.non');

scrol.forEach((item,index)=>{
    console.log(item);
    item.addEventListener('mouseenter',()=>{
        item.classList.remove('sty')
        item.classList.add('mo');
    })
    item.addEventListener('mouseleave',()=>{
        item.classList.remove('mo')
        item.classList.add('sty');
    })


})







})