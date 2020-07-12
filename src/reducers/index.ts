import { Saga } from "../sagas";
import { State } from "../model/model";

const defaultState: State = {
  items: [],
  isLoading: false,
};

const reducer = (state = defaultState, action: Saga) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, isLoading: true };
    case "ITEMS_RECEIVED":
      return { ...state, items: action.payload.items, isLoading: false };
    case "DELETE_ITEM":
      return { ...state };
    case "ITEM_DELETED":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.deletedItem
        ),
      };
    case "ITEM_UPDATED": {
      return {
        ...state,
        items: state.items.map((item) => {
          console.log(action);

          if (
            item.id === action.payload.updatedItemId &&
            action.payload.updatedItemDescription
          ) {
            return {
              ...item,
              description: action.payload.updatedItemDescription,
            };
          }

          return item;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
