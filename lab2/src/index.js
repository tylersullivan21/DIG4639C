import Element from "./Element.js";
import Card from "./components/card/index.js";

let card = new Card({content: "This is a card"});

let element = new Element("div");

element.render(card.render());