const express = require("express");

const mongo = require('./connention/connect');
const RoomRouter = require('./router/rooms_router');

const app = express();
// To convert req.body into json format
app.use(express.json());
mongo.connect();
app.use('/Rooms', RoomRouter);

app.listen(3000);