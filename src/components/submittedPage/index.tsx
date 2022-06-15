import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'

function SubmittedPage(): ReactElement {

  const {state} = useLocation();
  console.log(state)
  return (
    <>
      <h1>Thank you for your feedback</h1>
    </>
  )
}

export default SubmittedPage;