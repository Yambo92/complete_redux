import {ADD_INGREDIENT} from "../constants/action-types"

//action creator:
export const addIngredient = (recipe, name, quantity) => ({
    type: ADD_INGREDIENT, recipe, name, quantity
})