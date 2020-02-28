const express = require('express')

const PeopleRouter = require('./people/router.js')

const server = express();

server.use(express.json());
server.use("/api/people", PeopleRouter);

server.get("/", (req, res) => {
    res.json({server: "up and running"})
})

module.exports = server