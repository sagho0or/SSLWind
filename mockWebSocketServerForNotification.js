const WebSocket = require('ws');

const notificationWSS = new WebSocket.Server({ port: 8081 });

function sendNotification(ws) {
    const notification = {
        id: Date.now().toString(),
        message: 'Unsafe responso to saghar@gmail.com',
        id: Math.floor(Math.random() * 30) + 1,
        title: 'Safty Alarm',
        date: '2024-08-13T15:30:00Z',
        score: '0.4',
        userName: 'Saghar@gmail.com',
        lastMessage: 'How I should reset X program?',
        userId: Math.floor(Math.random() * 100)

    };
    ws.send(JSON.stringify(notification));
}

notificationWSS.on('connection', (ws) => {
    console.log('Notification Client connected');

    const interval = setInterval(() => {
        sendNotification(ws);
    }, 5000);

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Notification Client disconnected');
    });
});

const alertCountWS = new WebSocket.Server({ port: 8082 });

function sendAlertCount(ws) {
    const alertCount = {
        count: Math.floor(Math.random() * 10),
    };
    ws.send(JSON.stringify(alertCount));
}

alertCountWS.on('connection', (ws) => {
    console.log('Alert count client connected');

    const interval = setInterval(() => {
        sendAlertCount(ws);
    }, 60000); // Send count every minute

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Alert count client disconnected');
    });
});

console.log('Notification count WebSocket servers running on and ws://localhost:8082');

console.log('Notification WebSocket server is running on ws://localhost:8081');
