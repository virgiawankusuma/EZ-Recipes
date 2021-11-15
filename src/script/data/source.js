class Source {
    static search(keyword) {
        return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }
    static categories() {
        return fetch(`www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return Promise.resolve(responseJson.categories)
            })
    }
}

export default Source;