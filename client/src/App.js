import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import store from './redux'
import {Provider, connect} from 'react-redux'

function App({authIn}, ...props) {
  const routes = Routes()
  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}

let props = state => ({
  authIn: state.auth.authIn
})

export default connect(props,null)(App)
