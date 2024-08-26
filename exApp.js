const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/users.js");

//express app 

const app = express(); 

// listen for requests 

//connect to db 
const dbURI = "mongodb+srv://faizan:f1racing@cluster0.1yegu.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI)
    .then ((result) =>{app.listen(3000);})
    .catch((err) => {console.log(err)});

app.use(express.static("static"));
app.use(morgan("tiny"));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
    
app.get("/new-user", (req,res) => {

    const newUser = new User({
        Username:"Faizy",
        Password:"test123",
        favcolor:"red"
    })

    newUser.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err)=>{
            console.log(err)
        });

})

app.get("/users",(req,res) => {
    User.find()
        .then((result) => {res.render("users",{users : result})

    })
        .catch((err) => console.log(err));
})






app.get('/',(req,res) => {

    res.render("index");

})

app.get("/login", (req,res) => {

    res.render("login");

})

app.get("/404", (req,res) => {

    res.sendFile("./views/404.html",{root : __dirname});

})

app.get("/register", (req,res) => {

    res.render("register");

})

app.post("/register", (req,res) => {
    
    const newUser = new User(req.body);

    newUser.save()
        .then((result) => res.redirect("/users"))
        .catch((err) => console.log(err));

})

app.post("/login", async (req,res) => {

    try {
    myUser = await User.findOne({Username: req.body.Username})
    console.log(myUser);
     if(myUser == null) {
         console.log("Invalid Username");
         res.send("Invalid Username");
     }
     if (myUser.Password != req.body.Password) {
         console.log("Invalid Password");
         res.send("Invalid Password");
     }
     else {
        console.log("Correct Password!");
        res.render("form");
     }
    } catch(err){
        console.log(err);
    }
} )

app.get("/about-us", (req,res) => {

    res.redirect('/');
}
)

app.post("/form", (req, res) => {
    const university = req.body.university;
    const motivation = req.body.motivation;

    res.send(`Since you currently study at ${university}, and you love ${motivation}, you should become a ########`);
});
app.use((req,res) => {

    res.status(404).sendFile('views/404.html',{root:__dirname});

})  // used to create middleware  


// passing in loops or other js code in ejs is done by using <% %> tags 
// passing in variables or "data" is done by <%= %> tags 
// passing in partials is done by <%- %> tags 
//ejs code can only be one line max and HTML code cannot be inside 
    // meaning you might have to start a loop on one line, close the tag, add HTML, and then end the loop on another line with just a <% } %> 

