class SearchBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = `
        <div class="d-flex my-3 p-5 shadow border-0">
            <input class="form-control form-control-lg me-2" type="search" placeholder="Type food name.."
                aria-label="Search" id="search-input">
            <button class="btn btn-lg btn-warning" type="submit" id="search-button"><i class="bi bi-search"></i></button>
        </div>
        `;

        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-box', SearchBox);