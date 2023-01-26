import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardmobile} from './ui-components';
import {Flex, useBreakpointValue } from '@aws-amplify/ui-react'
import { Collection } from "@aws-amplify/ui-react";


function App() {

  const MobileDesktopSwitch = useBreakpointValue({
    small: <TopbarMobile width={'100vw'}></TopbarMobile>,
    large: <NavbarDesktop width={'100vw'}></NavbarDesktop>,
  })

  const MobileSearchBar = useBreakpointValue({
    small: <SearchBarMobile margin={30}></SearchBarMobile>,
    large: <></>
  })

  const FeaturedCard = useBreakpointValue({
    small: <FeaturedCardmobile margin={30}></FeaturedCardmobile>,
    large: <FeaturedCardDesktop margin={30}></FeaturedCardDesktop>
  })

  const EventCard= useBreakpointValue({
    small: <EventCardDefaultCollection margin={30}></EventCardDefaultCollection>,
    large: <EventCardExpandedCollection margin={30}></EventCardExpandedCollection>
  })

  const DiscoverBar= useBreakpointValue({
    small: <DiscoverMobile margin={30}></DiscoverMobile>,
    large: <></>
  })

  const MobileNavbar=useBreakpointValue({
    small: <NavBarMobile width={'100vw'}></NavBarMobile>,
    large: <></>
  })

  const Icons= useBreakpointValue({
    small: <TopicIcon margin={30}></TopicIcon>,
    large: <></>
  })
  
  return (
    <div className="App">
      {MobileDesktopSwitch}
      {MobileSearchBar}
      {DiscoverBar}
      {FeaturedCard}
      {EventCard}
      {MobileNavbar}
    </div>
  );
}

export default App;
