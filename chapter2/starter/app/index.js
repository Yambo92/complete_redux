import store from "./store/store.js"
import {fetchRecipes} from "./actions/recipes";
import loadUI from "./ui";

loadUI()

store.dispatch(fetchRecipes())