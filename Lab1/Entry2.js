const Entry = require("./Entry");

class Entry2 extends Entry {
constructor(title){
super(title);

}

render(){
    return `<h3>${this.props.title}</h3>`;
}

}

module.exports = Entry2;