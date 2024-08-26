const fs = require("fs");

// fs.readFile('blog1.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// does not wait for file to be read to be moved on to the next lines of code callback function is called whenver file is read 

fs.writeFile("./doc2.txt","HIIIIII WAHOa11OO!!!", () => {
    console.log("File was written")
});

// fs.rmdir("filename.txt", cb function)

//fs.