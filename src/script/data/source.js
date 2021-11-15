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
                    return Promise.reject(`The ${keyword} is not found`);
                }
            })
    }
}

export default Source;