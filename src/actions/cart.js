

export const addMealCart = (meal) => {
    return {
        type: "ADD_MEAL_CART",
        payload: meal
    }
}

export const deleteMealCart = (id) => {
    return {
        type: "DELETE_MEAL_CART",
        payload: id
    }
}

export const increase = (id) => {
    return {
        type: "INCREASE",
        payload: id
    }
}

export const decrease = (id) => {
    return {
        type: "DECREASE",
        payload: id
    }
}


