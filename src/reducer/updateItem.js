let initState = {};
const editMealReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_EDIT_MEAL":
            return action.payload;

        default:
            return state;
    }
}

export default editMealReducer;