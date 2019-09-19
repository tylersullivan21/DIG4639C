const Entry = require("./Entry.js");
const Entry2 = require("./Entry2.js")

let entry = new Entry("This is a sample h1 that I am creating in Entry.js");

let entry2 = new Entry2("This is a h2 from Entry2.js that I tested myself to attach to index.js")
console.log(entry.render());

console.log(entry2.render());
