const express = require("express");
const app = express();
const port = 3000;
const catalog = require('./routes/catalog');
const about = require('./routes/about');

app.use("/static", express.static(__dirname+"/static"));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))

app.use("/catalog", catalog);
app.use("/about", about);

app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
