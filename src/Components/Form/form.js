import React from "react";
import "./form.css"; 

const WebToLeadForm = () => {
  return (
    <form
      className="webform"
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK000004ayct"
      method="POST"
    >
      <input type="hidden" name="oid" value="00DgK000004ayct" />
      <input type="hidden" name="retURL" value="http://" />

      <h2>📩 Quick Inquiry</h2>

      <label>First Name</label>
      <input type="text" name="first_name" maxLength="40" />

      <label>Last Name</label>
      <input type="text" name="last_name" maxLength="80" />

      <label>Email</label>
      <input type="email" name="email" maxLength="80" />

     
      <label>Description</label>
      <textarea name="description" rows="4" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default WebToLeadForm;
