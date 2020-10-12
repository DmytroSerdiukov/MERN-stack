import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import AuthPage from './../pages/AuthPage'
import RegisterPage from '../pages/RegisterPage'
import Aparts from './../pages/Aparts'
import Menu from './../pages/Menu/Menu'
import Vouchers from '../pages/Vouchers/Vouchers'
import Orders from '../pages/Orders/Container'
import Bookings from '../pages/Bookings/Container' 

export default function Routes() {
   return (
    <Switch>
      <Route path='/' exact>
        <Menu/>
      </Route>
      <Route path='/auth' exact>
        <AuthPage />
      </Route>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Route path='/aparts' exact>
        <Aparts />
      </Route>
      <Route path='/menu' exact>
        <Menu />
      </Route>
      <Route path='/vouchers' exact>
        <Vouchers />
      </Route>
      <Route path='/orders' exact>
         <Orders />
       </Route>
      <Route path='/bookings' exact>
         <Bookings />
       </Route>
      <Redirect to='/'/>
    </Switch>
  )
}