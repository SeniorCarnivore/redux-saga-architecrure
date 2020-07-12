import { put, takeLatest, all, call } from "redux-saga/effects";
import { mock } from "./mock";

export interface SingleItem {
  id: number;
  name: string;
  description: string;
}

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

interface SagaPayload {
  items: SingleItem[];
  deletedItem?: number;
  updatedItemId?: number;
  updatedItemDescription?: string;
}

export interface Saga {
  type: string;
  payload: SagaPayload;
}

function* getItems() {
  yield call(delay, 1000);
  yield put({ type: "ITEMS_RECEIVED", payload: { items: mock } });
}

function* deleteItem(props: Saga) {
  yield call(delay, 1000);
  yield put({
    type: "ITEM_DELETED",
    payload: { deletedItem: props.payload.deletedItem },
  });
}

function* updateItem(props: Saga) {
  yield call(delay, 1000);
  yield put({
    type: "ITEM_UPDATED",
    payload: {
      updatedItemId: props.payload.updatedItemId,
      updatedItemDescription: props.payload.updatedItemDescription,
    },
  });
}

function* getItemsWatcher() {
  yield takeLatest("GET_ITEMS", getItems);
}

function* deleteItemWatcher() {
  yield takeLatest("DELETE_ITEM", deleteItem);
}

function* updateItemWatcher() {
  yield takeLatest("UPDATE_ITEM", updateItem);
}

export default function* rootSaga() {
  yield all([getItemsWatcher(), deleteItemWatcher(), updateItemWatcher()]);
}
