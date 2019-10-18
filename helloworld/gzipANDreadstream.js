const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./Example.txt");
const writeStream = fs.createWriteStream("example.txt.gz");

readStream.pipe(gzip).pipe(writeStream);