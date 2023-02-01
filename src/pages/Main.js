import {NavbarDesktop, TopbarMobile, NavBarMobile} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'
import { Outlet, Link } from "react-router-dom";

function Main() {
  
  const MobileDesktopSwitch = useBreakpointValue({
    small: <TopbarMobile width={'100vw'} position={'sticky'} top='0'></TopbarMobile>,
    large: <NavbarDesktop width={'100vw'} position={'sticky'} top='0'></NavbarDesktop>,
  })
  const MobileNavbar=useBreakpointValue({
    small: <NavBarMobile width={'100vw'} position={'fixed'} bottom='0'></NavBarMobile>,
    large: <></>
  })
  
  return (
    <div className='mainLayout'>
      {MobileDesktopSwitch}
      <Outlet/>
      {MobileNavbar}
    </div>
  )
};

export default Main;