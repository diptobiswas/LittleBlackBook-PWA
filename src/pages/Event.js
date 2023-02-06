import {NavbarDesktop, TopbarMobile, NavBarMobile} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'
import { Outlet, Link, useParams } from "react-router-dom";
import {models} from '../models/schema.js';
import React, { useState, useEffect } from "react";

// function Event(){
//    const { id } = useParams();
//    //const [data, setData] = useState(null);
// models
//    const p = Events.find((event) => event.id===id);

//   return data ? <div>{data.content}</div> : <div>Loading...</div>;
// };

  
  export default Event;