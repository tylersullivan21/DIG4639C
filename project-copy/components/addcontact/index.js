import  React from 'react';


export default class Addcontact extends React.Component{
   

    constructor(props){
super(props);

this.state = {data: []};
    }


    
    addContact()  {
window.fetch("https://apiexample.website/contacts/", {
    "method": "GET",
    "headers": {
       "api": "sullivan",
       "Content-Type": "application/json",
      "Accept": "application/json"
   },
     "body": JSON.stringify({
         "name": this.state.name,
        "number": this.state.number
      })
})
.then(response => response.json())
.then((data) => console.log(data))
.catch(err => {
    console.log(err);
});
}

    }
/*
    render(){

return(
<View style={styles.container}>
    
<Button  
title="submit"
onPress={ () => this.postData() }
/>
</View>



)




    }




}