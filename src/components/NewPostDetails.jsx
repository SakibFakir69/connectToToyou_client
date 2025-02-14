


import React from 'react'
import { useParams } from 'react-router'

function NewPostDetails() {

    const {id} = useParams();

    // make a put req


  return (
    <div>NewPostDetails {id}


    </div>
  )
}

export default NewPostDetails