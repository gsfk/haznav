"use-strict"

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {getAccidents} = require("./handlers")

const PORT = process.env.PORT || 8000;

express()
    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    // .use("/", express.static(__dirname + "/"))

    .get("/accidents", getAccidents)

    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "not found"
        });
    })

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));
