class Element {
constructor(element){

   this.element = document.createElement(element);

}

render(content){
  this.element.innerHTML = content;
  document.body.appendChild(this.element);


}
}

module.exports = Element;
