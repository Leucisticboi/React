import * as React from 'react';
import { Navbar1 } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Navbar1>
        <Outlet />
      </Navbar1>
    </React.Fragment>
  )
}

export default App
