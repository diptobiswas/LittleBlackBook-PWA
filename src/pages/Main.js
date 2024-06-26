import {NavbarDesktop, TopbarMobile, NavBarMobile} from '../ui-components';
import React from 'react';
import {useBreakpointValue } from '@aws-amplify/ui-react'
import { Outlet, Link} from "react-router-dom";

function Main() {
  
  const MobileDesktopSwitch = useBreakpointValue({
    small: <TopbarMobile width={'100vw'} position={'sticky'} top='0' style={{zIndex : 999}}></TopbarMobile>,
    large: <NavbarDesktop width={'100vw'} position={'sticky'} top='0' style={{zIndex : 999}}></NavbarDesktop>
  });
  const MobileNavbar=useBreakpointValue({
    small: <NavBarMobile width={'100vw'} position={'fixed'} bottom='0'></NavBarMobile>,
    large: <></>
  });

  return (
    <div>
      {MobileDesktopSwitch}
        <Outlet/>
     {MobileNavbar}
    </div>
  )


  
};

export default Main;