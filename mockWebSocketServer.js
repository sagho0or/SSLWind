const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

function sendRandomData(ws) {
    const score = Math.random();
    const dataPoint = {
        id: Date.now(),
        score,
        response_text: score > 0.5 ? 'Safe response' : 'Unsafe response',
        timestamp: new Date().toISOString(),
        is_safe: score > 0.5,
    };
    ws.send(JSON.stringify(dataPoint));
}

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send data every 2 seconds
    const interval = setInterval(() => {
        sendRandomData(ws);
    }, 2000);

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});
// run by :node mockWebSocketServer.js
console.log('WebSocket server is running on ws://localhost:8080 ');
