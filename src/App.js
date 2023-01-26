import logo from './logo.svg';
import './App.css';

import { Flex, View, useBreakpointValue } from '@aws-amplify/ui-react'
import { NavbarDesktop, NavBarMobile, TopbarMobile } from './ui-components'


function App() {

  const variant = useBreakpointValue({
    small: <TopbarMobile width={'100vw'}></TopbarMobile>,
    large: <NavbarDesktop width={'100vw'}></NavbarDesktop>,
  })

  return (
    <div className="App">
      {variant}
    </div>
  );
}

export default App;
