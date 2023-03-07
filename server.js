const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


console.log(process.env.PORT)

app.listen(PORT)
