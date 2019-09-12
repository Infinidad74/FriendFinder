var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});

