const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();
const PORT = "5000";

let count = 0;

event.on("emit in api with count", () => {
    count++;
    console.log("count on function: ", count);
})

app.get('/', (req, res) => {
    console.log('api get called');
    event.emit("emit in api with count");
    res.send("send");
})

app.get('/search', (req, res) => {
    console.log('api get called');
    event.emit("emit in api with count")
    res.send("send search");
})

app.get('/update', (req, res) => {
    console.log('api get called');
    event.emit("emit in api with count")
    res.send("send update");
})

app.listen(PORT);