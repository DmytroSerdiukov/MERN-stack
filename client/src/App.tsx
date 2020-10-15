import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import {Provider, connect} from 'react-redux'

type Props = {
  authIn: boolean
}

const App: React.FC<Props> = props => {
  const {authIn} = props
  const routes = Routes()
  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}



let props = (state: any) => ({
  authIn: state.auth.authIn
})

export default connect(props,null)(App)
