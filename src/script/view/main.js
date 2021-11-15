import '../component/food-box.js';
import '../component/search-box.js';
import Source from '../data/source.js';

const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.add('shadow-sm');
    }
});

const main = () => {
    const searchBox = document.querySelector('search-box');
    const foodBox = document.querySelector('food-box');

    const searchButtonClick = async () => {
        try {
            const result = await Source.searchFood(searchBox.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        foodBox.foods = results;
    };

    const fallbackResult = message => {
        foodBox.renderError(message);
    };

    searchBox.clickEvent = searchButtonClick;
};

export default main;