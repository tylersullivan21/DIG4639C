const.ArticleTitle = require("./ArticleTitle.js");
class ArticleTitle {

constructor(props){
this.props = props;
this.title = new ArticleTitle(props);
}

render(){
  return this.title.render();
}

}
module.exports = ArticleTitle;
