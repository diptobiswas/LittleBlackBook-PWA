import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardmobile} from '../ui-components';
import { SearchField, useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
  
    const MobileSearchBar = useBreakpointValue({
      small: <SearchField marginLeft={110} marginTop={30} marginRight={110}
              placeholder="Search for resources"
              />,
      large: <></>
    })
  
    const FeaturedCard = useBreakpointValue({
      small: <FeaturedCardmobile margin={30} ></FeaturedCardmobile>,
      large: <FeaturedCardDesktop margin={30}></FeaturedCardDesktop>
    })
  
    const EventCard= useBreakpointValue({
      small: <EventCardDefaultCollection margin={'auto'}></EventCardDefaultCollection>,
      large: <EventCardExpandedCollection margin={'auto'} ></EventCardExpandedCollection>
    })
  
    const DiscoverBar= useBreakpointValue({
      small: <DiscoverMobile margin={'auto'}></DiscoverMobile>,
      large: <></>
    })
  
    const Icons= useBreakpointValue({
      small: <TopicIcon margin={30}></TopicIcon>,
      large: <></>
    })
    
    return (
      <div className="home">
        {MobileSearchBar}
        {FeaturedCard}
        {EventCard}
      </div>
    );
}

export default Home;