import { combineReducers } from "redux";
import cartReducer from "./cart";
import mealReducer from "./meals";
import editMealReducer from "./updateItem";

const rootReducer = combineReducers({
    meals: mealReducer,
    editMeal: editMealReducer,
    cart: cartReducer
})

export default rootReducer;