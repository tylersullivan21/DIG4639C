import React from "react";
import './index.css'
function AddContact(props) {
  return (
    <div>
      <h2>Use this form to create a contact! Enter your the name and number of the person that you want to create!</h2>
   <form className="form-container" method="POST"> 
   <div className="form-items">
     <label for="name-input">Name:</label>
<input type="text" id="name-input" name="name-input">

</input><br/>
<label for="number-input">Number:</label>

<input type="text" id="number-input" name="number-input"></input>

<button type="submit"  onClick={props.createContact}>Create Contact</button>
</div>

   </form>
   </div>
  );
}

export default AddContact;