import './food-card.js';

class FoodBox extends HTMLElement {
    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._foods.forEach(food => {
            const foodListElement = document.createElement('food-card');
            foodListElement.classList.add('col-lg-6', 'col-12');
            foodListElement.food = food;
            this.appendChild(foodListElement);
        })
    }

    renderError(message) {
        this.innerHTML = ``;
        this.innerHTML += `
        <div class="col">
            <div class="card my-3 shadow border-0">
                <div class="row g-0">
                    <div class="col">
                        <div class="card-body text-center py-5">
                            <h3 class="text-danger">${message}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('food-box', FoodBox);