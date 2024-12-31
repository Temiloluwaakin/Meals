import axiosClient from '../axiosClient';

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)//action makes request to server
    .then(({data}) => {
        //debugger; use it to show the data before being passed i.e meals below for this one and then clear
        commit('setSearchedMeals', data.meals)//gets the data and call the mutation 
    })
}

export function searchMealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({commit}, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data}) => {
        commit('setMealsByIngredient', data.meals)
    })
}

export function getIngredients({commit}) {
    axiosClient.get(`list.php?i=list`)
    .then(({data}) => {
        commit('setIngredients', data.meals)
    })
}