const navBtn = document.getElementById('nav-btn');
const menubtn = document.getElementById('menu-btn');
const lightbox = document.getElementById('menu-lightbox');
const closeBtn = document.getElementById('close-btn');

const overlay =document.querySelector('.overlay');
const sideBar = document.getElementById('side-bar');
const closeNav = document.getElementById('close-nav');


menubtn.addEventListener('click', ()=>{
    lightbox.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
})

navBtn.addEventListener('click', () => {
     sideBar.classList.add('open');
  overlay.classList.remove('hidden');
 
})

closeNav.addEventListener('click', () => {
    sideBar.classList.remove('open');
    overlay.classList.add('hidden')
})
