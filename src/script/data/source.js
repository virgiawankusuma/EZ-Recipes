class Source {
    static searchFood(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const foods = data.meals
                if (foods) {
                    return Promise.resolve(foods);
                } else {
                    return Promise.reject(`The food with name "${keyword}" could not be found. Please check your keyword!`);
                }
            })
    }

    static detailFood(id) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const foodDetail = data.meals
                if (foodDetail) {
                    return Promise.resolve(foodDetail);
                } else {
                    return Promise.reject(`The food with ID "${id}" could not be found. Please check your ID!`);
                }
            })
    }
}

export default Source;