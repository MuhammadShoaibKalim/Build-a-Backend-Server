require("dotenv").config();
const express = require("express");
const app = express();

app.get("/Home", (req, res) => {
    res.send("This is an empty response..!!");
});

app.get("/ShaibiCode", (req, res) => {
    res.send("Hi there in ShaibiCode and Solution");
});

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

app.listen(PORT, () => {
    console.log(`ShaibiCode and Solution is running on ${PORT}`);
});
