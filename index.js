import * as fs from 'fs';
import * as cheerio from 'cheerio';

const file = fs.readFileSync('xml/Ambiance.wwu', 'utf8');
const $ = cheerio.load(file, {xmlMode: true});

let txt1 = "<p>Text.</p>";
let txt2 = $("<p></p>").text("Text.");
$("AudioObjects").prepend(txt1, txt2);

fs.writeFileSync('xml/output.xml', $.xml());
