import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    if (action.type === TOGGLE_FAVORITE) {
        console.log(state.favoriteMeals);
        if (state.favoriteMeals.includes(action.mealId)) {
            const updatedFavoriteMeals = state.favoriteMeals.filter(
                (meal) => meal !== action.mealId
            );
            console.log(updatedFavoriteMeals);
            return {
                ...state,
                favoriteMeals: updatedFavoriteMeals
            };
        } else {
            const newFavoriteMeals = [...state.favoriteMeals, action.mealId];
            console.log(newFavoriteMeals);
            return {
                ...state,
                favoriteMeals: [...state.favoriteMeals, action.mealId],
                
            };
        }
    }
    return state;
};

export default mealsReducer;