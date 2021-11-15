import './food-item.js';

class FoodBox extends HTMLElement {
    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._foods.forEach(food => {
            const foodListElement = document.createElement('food-item');
            foodListElement.classList.add('col-lg-6', 'col-12');
            foodListElement.food = food;
            this.appendChild(foodListElement);
        })
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('food-box', FoodBox);