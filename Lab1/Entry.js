class Entry {

constructor(sample){
this.props = {};
this.props = sample;
}

render(){
return `<h1>${this.props.sample}</h1>`;

}

}


module.exports = Entry;