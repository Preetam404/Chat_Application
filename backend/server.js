const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data.js');
const connectDB = require('./config/db.js');

// Load environment variables
dotenv.config();
console.log('MONGO_URI in server.js:', process.env.MONGO_URI); // Debug log

const app = express();

app.use(express.json());

app.get('/', (req, response) => {
    response.send('API is running');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(chat => chat._id === req.params.id);
    if (!singleChat) {
        return res.status(404).send({ message: 'Chat not found' });
    }
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();