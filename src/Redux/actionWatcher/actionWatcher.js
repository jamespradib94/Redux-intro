import { takeEvery, takeLatest } from "redux-saga/effects";
import { getDataSaga,getAllUsersSaga,counterSaga,clearSaga } from "../Sagas/sagas";

export default function* actionWatcher() {
  yield takeLatest("GETDATASINGLEUSER", getDataSaga);
  yield takeLatest("GETDATAALLUSERS", getAllUsersSaga);
  yield takeLatest("CLEAR",clearSaga)
 yield takeEvery ("COUNTER",counterSaga)
}
