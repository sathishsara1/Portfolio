const express = require("express");
const app = express();
app.set('view engine','ejs');
const port = 3000;
app.get('/', (req, res) => {
    res.render("Home")
});
app.get("/about", (req,res) => {
    res.render("About")
});
app.get("/achievements", (rq,res) => {
    res.render("Achievements")
});
app.get("/feedback", (req,res) => {
    res.render("FeedBack")
});
app.get("/projects", (req,res) => {
    res.render("Projects")
});
app.get("/skills", (req,res) =>{
    res.render("Skills")
});
app.listen(3000, () => {
    console.log(`Listening to ${port}`)
});