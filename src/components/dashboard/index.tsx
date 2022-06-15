import React, { ReactElement } from 'react'

function Dashboard(): ReactElement {

  
  return (
    <div className='outerContainer'>
      <form className='formContainer'>
        <h1>Feedback Collection Form</h1>
        <input className='formElementSmall' placeholder='name' />
        <input className='formElementSmall' placeholder='job title' />
        <input className='formElementSmall' placeholder='years in current role' />
        <textarea className='formElementLarge' placeholder='What do you like about marketing corp' />
        <button className='formElementButton'>Submit</button>
      </form>
    </div>
  )
}

export default Dashboard