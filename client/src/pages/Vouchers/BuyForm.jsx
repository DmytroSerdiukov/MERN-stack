import React from 'react'
import {TextField} from '@material-ui/core'

const BuyForm = () => {

  const fields = ['First Name', "Second Name", "Email"]

  return <div>
    {fields.map( (el, i) => (
      <TextField 
        key ={i} 
        label={el}
      />
      )
    )}    
  </div>
}

export default BuyForm