import { all } from 'redux-saga/effects';
import loginSaga from '@/store/auth/login/form/saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    // Add other sagas here
  ]);
}
