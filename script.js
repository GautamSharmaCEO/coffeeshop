let menu = document.getElementById('menu-btn');
let navbar = document.querySelectorAll('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}