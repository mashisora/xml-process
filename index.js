const fs = require('fs');
const cheerio = require('cheerio');

const file = fs.readFileSync('Ambiance.wwu', 'utf8');
const $ = cheerio.load(file, {xmlMode: true});

let txt1 = "<p>Text.</p>";
let txt2 = $("<p></p>").text("Text.");
$("AudioObjects").prepend(txt1, txt2);

fs.writeFileSync('output.xml', $.xml());
