// reading and writing really large files are easier with streams

// we can start using the data before its fully read, pass the edata a bit at a time using a stream 

// little bits of data are sent to the browser 

//readstreams for reading data and write streams for writing streams 

const fs = require("fs");

const readStream = fs.createReadStream('./doc2.txt', );
const writeStream = fs.createWriteStream("./docteehee.txt");

readStream.on('data', (chunk) => {   // every time we get a chunk of data we can fire this cb function to do something with this chunk 

    console.log("New CHUNK");
    console.log(chunk);

})

// we can use piping to pipe data from a read stream to a write stream form to database 

readStream.pipe(writeStream);