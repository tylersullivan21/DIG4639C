import React from "react";
import './index.css'
function AddContact(props) {
  return (
   <form className="form-container" method="POST"> 
   <div className="form-items">
<input type="text" id="name-input" name="name-input">

</input>

<input type="text" id="number-input" name="number-input"></input>

<button type="submit"  onClick={props.createContact}>Create Contact</button>
</div>

   </form>
  );
}

export default AddContact;