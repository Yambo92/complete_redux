import {ADD_RECIPE, SET_RECIPES, FETCH_RECIPES} from "../constants/action-types"
export const addRecipe = (name) => ({
    type:ADD_RECIPE, name
})

export const fetchRecipes =  () => ({
    type: FETCH_RECIPES
})

export const setRecipes = (data) => ({
    type: SET_RECIPES, recipes:data.recipes
})

