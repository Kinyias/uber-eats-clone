let defaultState = {
  seletedItems: { items: [], restaurantName: '' },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        newState.seletedItems = {
          items: [...newState.seletedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.seletedItems = {
          items: [
            ...newState.seletedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
