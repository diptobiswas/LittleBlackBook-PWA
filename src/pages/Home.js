import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, 
  EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, 
  TopicIconDesktopCollection, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardMobile, 
  FeaturedCardDesktopCollection, FeaturedCardMobileCollection, OrganizationButtonDesktopCollection} from '../ui-components';
import { Flex, SearchField, useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
    const MobileSearchBar = useBreakpointValue({
      small: <SearchField padding={30}
              placeholder="Search for resources"
              />,
      large: <SearchField padding={30}
              placeholder="Search for resources"
              />
    })
  
    const FeaturedCardDesktop = useBreakpointValue({
      large: <FeaturedCardDesktopCollection margin={'auto'}></FeaturedCardDesktopCollection>
    })

    const FeaturedCardMobile = useBreakpointValue({
      small: <FeaturedCardMobileCollection margin={'auto'}></FeaturedCardMobileCollection>,
      large: <></>
    })
  
    const EventCard= useBreakpointValue({
      small: <EventCardDefaultCollection margin={'auto'}></EventCardDefaultCollection>,
      large: <EventCardExpandedCollection margin={'auto'}></EventCardExpandedCollection>
    })
  
    const DiscoverBar= useBreakpointValue({
      small: <DiscoverMobile margin={'auto'}></DiscoverMobile>,
      large: <></>
    })
  
    const TopicIcons= useBreakpointValue({
      large: <TopicIconDesktopCollection margin={30}></TopicIconDesktopCollection>,
    })
    
    return (
      <div className="home">
        {MobileSearchBar}
        <Flex display={'horizontal direction'} justifyContent={'center'}>
            {FeaturedCardDesktop}
            {TopicIcons}
        </Flex>
        {FeaturedCardMobile}
        {EventCard}
      </div>
    )
};

export default Home;