import React from "react";


function AddContact(props) {
  // console.log(props);

  return (
   <form method="POST"> 
<input type="text" id="name-input" name="name-input">

</input>

<input type="text" id="number-input" name="number-input"></input>

<button type="submit"  onClick={props.createContact}>Create Contact</button>


   </form>
  );
}

export default AddContact;