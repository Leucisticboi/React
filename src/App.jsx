import * as React from 'react';
import { Navbar } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Navbar>
        <Outlet />
      </Navbar>
    </React.Fragment>
  )
}

export default App
