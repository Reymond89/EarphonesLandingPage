const menuHamburguer = document.getElementById('menu-btn');
const menuList = document.getElementById('nav');

menuHamburguer.addEventListener('click', ()=>{
    menuList.classList.toggle('close');
})

