class Entry {

constructor(title){
this.props = {};
this.props.title = title;
}

render(){
return `<h1>${this.props.title}</h1>`;

}
}
module.exports = Entry;