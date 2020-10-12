import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
const Menu = ({authIn}) => {
    console.log('Auth',authIn)
    const chapters = ['Aparts', 'Vouchers', 'Orders','Bookings']
    const notAuthChapters = ['Aparts', 'Vouchers']
    
    return <div>
      {
        authIn? 
        <div>
          <Box component="span" m={1}>
            <NavLink to={'/aparts'}>Aparts</NavLink>
          </Box>
          <Box component="span" m={1}>
            <NavLink to={'/vouchers'}>Vouchers</NavLink>
          </Box>
          <Box component="span" m={1}>
            <NavLink to={'/orders'}>Orders</NavLink>
          </Box>
          <Box component="span" m={1}>
            <NavLink to={'/bookings'}>Bookings</NavLink>
          </Box>
        </div>
        :
        notAuthChapters.map((el, i) => (
          <Box key={i} component="span" m={1}>
            <NavLink to={`/`+el.toLowerCase()}>{el}</NavLink>
          </Box>))
      }      
    </div>
}

let props = state => ({
    authIn: state.auth.authIn
})

export default connect(props, null)(Menu)