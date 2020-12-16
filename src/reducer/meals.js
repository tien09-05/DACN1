let initState = [];
const mealReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_MEAL":
            let newList = [...state];
            newList.push(action.payload);
            return newList;
        case "DELETE_MEAL":
            return state.filter(meal => meal.id !== action.payload);
        case "UPDATE_MEAL":
            let NewList = [...state];
            let index = -1;
            NewList.forEach((meal, i) => {
                if (meal.id === action.payload.id) {
                    index = i;
                }
            })
            NewList.splice(index, 1, action.payload);
            return NewList;
        case "GET_MEALS":
            return [...action.payload];

        default:
            return state;
    }
}

export default mealReducer;