import { put, call, delay } from "redux-saga/effects";
import { getDataAction, getAllDataAction } from "../actions/actions";

export function* getDataSaga(payload) {
  try {
    yield put({ type: "Loading", loading: true });
    const response = yield call(getDataAction, payload);
    yield put({ type: "Save_Data", value: response });
    yield put({ type: "Loading", loading: false });
  } catch (error) {
    yield put({ type: "Loading", loading: false });
    yield put ({type:"Error",value:"No data found"})
  }
}

export function* getAllUsersSaga(payload) {
  try {
    yield put({ type: "Loading", loading: true });
    const response = yield call(getAllDataAction, payload);
    yield put({ type: "Save_Data_AllUsers", value: response });
    yield put({ type: "Loading", loading: false });
  } catch (error) {
    yield put({ type: "Loading", loading: false });
  }
}

export function* clearSaga() {
  yield put({ type: "CLEARDATA" });
}
export function * counterSaga(){
  yield delay(3000)
  yield put ({type:"Counter"})
}
