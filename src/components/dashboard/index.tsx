import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard(): ReactElement {
  const navigate = useNavigate();

  function submitHandler(event: any): void {
    event.preventDefault();

    const formFields = {
      companyName: event.target.companyName.value,
      jobTitle: event.target.jobTitle.value,
      yearsInRole: event.target.yearsInRole.value,
      thingsLiked: event.target.thingsLiked.value
    };
    
    navigate('/thankyou', {state: formFields.companyName});
  }

  return (
    <div className='outerContainer'>
      <form className='formContainer' onSubmit={submitHandler}>
        <h1>Feedback Collection Form</h1>
        <input className='formElementSmall' name='companyName' placeholder='Company Name' required/>
        <input className='formElementSmall' name='jobTitle' placeholder='Job Title' required/>
        <input className='formElementSmall' name='yearsInRole' placeholder='Years in current role' required/>
        <textarea className='formElementLarge' name='thingsLiked' placeholder='What do you like about marketing corp' required/>
        <button className='formElementButton'>Submit</button>
      </form>
    </div>
  )
}

export default Dashboard