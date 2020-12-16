import axios from "axios"


export const addMeal = (meal) => async dispatch => {
    const response = await axios.post('/meal', meal);
    console.log(meal);
    dispatch({ type: 'ADD_MEAL', payload: response.data });
};
export const deleteMeal = (id) => async dispatch => {
    await axios.delete(`/meal/${id}`);
    dispatch({ type: 'DELETE_MEAL', payload: id });
};
export const updateMeal = (meal) => async dispatch => {
    const response = await axios.put(`/meal/${meal.id}`, meal);
    dispatch({ type: 'UPDATE_MEAL', payload: response.data });
};
export const getMeals = () => async dispatch => {
    const response = await axios.get('/meal');
    dispatch({ type: 'GET_MEALS', payload: response.data });
};

export const getEditMeal = (meal) => {
    return {
        type: "GET_EDIT_MEAL",
        payload: meal
    }
}




