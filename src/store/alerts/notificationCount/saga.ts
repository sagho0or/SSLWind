import { call, put, takeLatest, take, fork } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import { setCount, incrementCount, setLastNotification } from './slice';

// Properly typed function to create a WebSocket channel
function createWebSocketChannel(url: string): EventChannel<any> {
    return eventChannel((emit) => {
        const ws = new WebSocket(url);

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            emit(data);
        };

        ws.onclose = () => {
            console.log('WebSocket closed');
        };

        return () => {
            ws.close();
        };
    });
}

function* handleNotificationWebSocket(): Generator<any, void, any> {
    const notificationChannel: EventChannel<any> = yield call(createWebSocketChannel, 'ws://localhost:8081');

    while (true) {
        const notification = yield take(notificationChannel);
        yield put(incrementCount());
        yield put(setLastNotification(notification));
    }
}

function* handleAlertCountWebSocket(): Generator<any, void, any> {
    const alertCountChannel: EventChannel<any> = yield call(createWebSocketChannel, 'ws://localhost:8082');

    while (true) {
        const alertCount = yield take(alertCountChannel);
        yield put(setCount(alertCount.count));
    }
}

export default function* notificationSaga() {
    yield fork(handleNotificationWebSocket);
    yield fork(handleAlertCountWebSocket);
}
