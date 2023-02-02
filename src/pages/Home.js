import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, 
  EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, 
  TopicIconDesktopCollection, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardMobile, 
  FeaturedCardDesktopCollection, FeaturedCardMobileCollection, OrganizationButtonDesktopCollection} from '../ui-components';
import { Flex, SearchField, useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
  
    const MobileSearchBar = useBreakpointValue({
      small: <SearchField marginLeft={110} marginTop={30} marginRight={110}
              placeholder="Search for resources"
              />,
      large: <SearchField marginLeft={110} marginTop={10} marginRight={110}
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
        <Flex display={'horizontal direction'} width={'100vh'} margin={'auto'}>
            {FeaturedCardDesktop}
            {TopicIcons}
        </Flex>
        {FeaturedCardMobile}
        {EventCard}
      </div>
    )
};

export default Home;