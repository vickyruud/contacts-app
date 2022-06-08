import React from 'react';
import { BsFillCursorFill } from "react-icons/bs";


function Email({ email, subject, body }) {
  console.log(email,subject,body)
  
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}><BsFillCursorFill/></a>;
}

export default Email