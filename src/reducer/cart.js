let initState = [];
const cartReducer = (state = initState, action) => {
    let newList = [...state];
    let index = -1;
    switch (action.type) {
        case "ADD_MEAL_CART":
            index = newList.findIndex(item => item.id === action.payload.id);

            if (index === -1) {
                newList.push(action.payload);
                return newList;
            } else {
                newList[index] = {
                    ...newList[index],
                    soluong: newList[index].soluong + 1
                }
                return newList;
            };
        case "INCREASE":
            index = newList.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                newList[index] = {
                    ...newList[index],
                    soluong: newList[index].soluong + 1
                }
            }
            return newList;
        case "DECREASE":
            index = newList.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                if (newList[index].soluong !== 0) {
                    newList[index] = {
                        ...newList[index],
                        soluong: newList[index].soluong - 1
                    }
                }
            }
            return newList;
        case "DELETE_MEAL_CART":
            return state.filter(meal => meal.id !== action.payload);
        default:
            return state;
    }
}

export default cartReducer;