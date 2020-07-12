export interface Action {
  type: string;
  payload?: any;
}

export const getItems = (): Action => ({
  type: "GET_ITEMS",
});

export const deleteItem = (deletedItem: number): Action => ({
  type: "DELETE_ITEM",
  payload: {
    deletedItem: deletedItem,
  },
});

export const updateItem = (id: number, editedDescription: string): Action => ({
  type: "UPDATE_ITEM",
  payload: {
    updatedItemId: id,
    updatedItemDescription: editedDescription,
  },
});
