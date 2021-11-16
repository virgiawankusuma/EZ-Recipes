import "regenerator-runtime";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import view from './script/view.js';

document.addEventListener("DOMContentLoaded", view);

const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.add('shadow-sm');
    }
});
