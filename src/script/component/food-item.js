class FoodItem extends HTMLElement {
    set food(food) {
        this._food = food
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card my-3 shadow border-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this._food.strMealThumb}"
                            class="img-fluid rounded-start" alt="${this._food.strMeal}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${this._food.strMeal}</h4>
                            <h5 class="card-text fw-normal">${this._food.strArea} Food</h5>
                            <p class="card-text"><small class="text-muted">Food Category: ${this._food.strCategory}</small></p>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('food-item', FoodItem);