class Article {

constructor(props){
  this. props = props;
}

render(){
  return `<h1>${this.props.title}</h1>`;
}

}
module.exports = Article;
