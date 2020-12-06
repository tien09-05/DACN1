import axios from "axios"

export const addMeal = (meal) => {
    return {
        type: "ADD_MEAL",
        payload: meal
    }
}

export const deleteMeal = (id) => {
    return {
        type: "DELETE_MEAL",
        payload: id
    }
}

export const updateMeal = (meal) => {
    return {
        type: "UPDATE_MEAL",
        payload: meal
    }
}

export const getMeals = () => async dispatch => {
    const response = await axios.get('/meals');
    dispatch({ type: 'GET_MEALS', payload: response.data });
};

export const getEditMeal = (meal) => {
    return {
        type: "GET_EDIT_MEAL",
        payload: meal
    }
}


