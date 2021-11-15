import './component/food-box.js';
import './component/search-box.js';
import Source from './source.js';

const view = () => {
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

    searchBox.clicked = searchButtonClick;
};

export default view;