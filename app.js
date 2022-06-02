const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

// console.log(date());

const app = express();
var items=["Buy food", "Cook Food", "Eat food"];
var workItems=[];
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    let day = date.getDay();
    res.render("list", {listTitle:day, newListItem: items});
});

app.post("/", function(req, res){
    item = req.body.newItem;
    if (req.body.list==="Work") {
        workItems.push(item)
        res.redirect("/work");
    }else{
    items.push(item);
    }
    // res.render("list", {newListItem: item});
    res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})