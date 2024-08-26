const http = require("http"); 
const fs = require("fs");
const _ = require('lodash');

const server = http.createServer((req,res) => {

    let path = "./views";

    switch(req.url){

        case "/":
            path += "/index.html";
            res.statusCode = 200;
            break;
        case "/login":
            path += '/login.html';
            res.statusCode = 200;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    
        
    }

    console.log("User entry 2",req.method, req.url);

// set header for the response

    res.setHeader("Content-Type","text/html");

// send an HTMLM file     
fs.readFile(path, (err,data) => {

    if (err) {
        console.log(err);
        res.end();
    }
    res.end(data);
}
)
}); 

server.listen(3000,"localhost",() => {

    console.log("Server is up!");

})

// this callback function runs every time a request comes in to our server 
//it has two objects the req(request) object and the res(resopnse) object 
    // the request object has information about the request for example the URL and the request type 
    // response object is used to send a response to the USER in the browser 


// in order to keep old links valid if you change a route on your website, we need to redirect everyone that uses the old link to the new link. 
// add another case in your routing section, change the status code to 301 for a permanently moved URL. 
// redirect using res.setHeader('Location',"path for redirection");
// and then also res.end()