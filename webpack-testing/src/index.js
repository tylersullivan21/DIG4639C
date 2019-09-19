const Article = require("./Article.js");
const Element = require("./Element.js");
let article = new Article({title: "Confusing"});
let element = new Element("div");
element.render(article.render());
