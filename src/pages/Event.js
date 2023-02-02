import {NavbarDesktop, TopbarMobile, NavBarMobile} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'
import { Outlet, Link, useParams } from "react-router-dom";

function Event() {
    const id = useParams()
        
    return (
       <div className="event">
         
         
       </div>
    );
  }
  
  export default Event;