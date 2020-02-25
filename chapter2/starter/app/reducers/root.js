import { combineReducers } from "redux";
import {recipesReducer} from "./recipes";
import {ingredientsReducer} from "./ingredients";


//本例子中reducer仅仅是返回了一个state， 并没有用到action
// const reducer = (state, action) => state;





//完善后的reducer:
//  const reducer = (state, action) => {
//         return Object.assign({}, state, {
//             recipes: recipesReducer(sate.recipes, action),
//             ingredients: ingredientsReducer(state.ingredients, action)
//         })
// }

export default combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer
})