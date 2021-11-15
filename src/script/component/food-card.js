class FoodCard extends HTMLElement {
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
                        <a type="button" data-bs-toggle="modal" data-bs-target="#Modal${this._food.idMeal}" class="card-title h4 card-link" id="btn${this._food.idMeal}">${this._food.strMeal}</a>
                        <h5 class="card-text fw-normal">
                        <span class="badge bg-warning">
                        ${this._food.strArea} Food
                        </span>
                        </h5>
                        <p class="card-text"><small class="text-muted">Food Category: ${this._food.strCategory}</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="Modal${this._food.idMeal}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ModalLabel${this._food.idMeal}" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${this._food.strMealThumb}" alt="${this._food.strMeal}">

                        <h3 class="modal-title mt-3" id="ModalLabel${this._food.idMeal}">${this._food.strMeal}
                        <span class="badge bg-warning">
                        ${this._food.strArea} Food
                        </span>
                        </h3>
                        
                        <p class="card-text text-muted">Food Category: ${this._food.strCategory}</p>  
                        
                        <h5 class="card-text">Ingredients:</h5>
                        <ul class="card-text text-muted mx-0 p-0" type="none">
                            <li>${this._food.strIngredient1}</li>
                            <li>${this._food.strIngredient2}</li>
                            <li>${this._food.strIngredient3}</li>
                            <li>${this._food.strIngredient4}</li>
                            <li>${this._food.strIngredient5}</li>
                            <li>${this._food.strIngredient6}</li>
                            <li>${this._food.strIngredient7}</li>
                            <li>${this._food.strIngredient8}</li>
                            <li>${this._food.strIngredient9}</li>
                            <li>${this._food.strIngredient10}</li>
                            <li>${this._food.strIngredient11}</li>
                            <li>${this._food.strIngredient12}</li>
                            <li>${this._food.strIngredient13}</li>
                            <li>${this._food.strIngredient14}</li>
                            <li>${this._food.strIngredient15}</li>
                            <li>${this._food.strIngredient16}</li>
                            <li>${this._food.strIngredient17}</li>
                            <li>${this._food.strIngredient18}</li>
                            <li>${this._food.strIngredient19}</li>
                            <li>${this._food.strIngredient20}</li>
                            <li>${this._food.strIngredient21}</li>
                            <li>${this._food.strIngredient22}</li>
                            <li>${this._food.strIngredient23}</li>
                            <li>${this._food.strIngredient24}</li>
                            <li>${this._food.strIngredient25}</li>
                        </ul>  
                        
                        <h5 class="card-text">Instructions:</h5>
                        <p class="card-text text-muted">${this._food.strInstructions}</p>
                        
                        <h5 class="card-text">Video Tutorial:</h5>
                        <a class="btn btn-danger" href="${this._food.strYoutube}" target="_blank">
                        <i class="bi bi-youtube"></i> Watch on Youtube
                        </a>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.querySelector(`#btn${this._food.idMeal}`).addEventListener('click', this._foodIdClicked);
    }
}

customElements.define('food-card', FoodCard);