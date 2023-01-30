import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardmobile} from '../ui-components';
import { useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
  
    const MobileSearchBar = useBreakpointValue({
      small: <SearchBarMobile margin={30}></SearchBarMobile>,
      large: <></>
    })
  
    const FeaturedCard = useBreakpointValue({
      small: <FeaturedCardmobile margin={30} ></FeaturedCardmobile>,
      large: <FeaturedCardDesktop margin={30}></FeaturedCardDesktop>
    })
  
    const EventCard= useBreakpointValue({
      small: <EventCardDefaultCollection margin={30}></EventCardDefaultCollection>,
      large: <EventCardExpandedCollection margin={30}></EventCardExpandedCollection>
    })
  
    const DiscoverBar= useBreakpointValue({
      small: <DiscoverMobile width={'100vw'} align={'center'}></DiscoverMobile>,
      large: <></>
    })
  
    const Icons= useBreakpointValue({
      small: <TopicIcon margin={30}></TopicIcon>,
      large: <></>
    })
    
    return (
      <div className="home">
        {MobileSearchBar}
        {DiscoverBar}
        {FeaturedCard}
        {EventCard}
      </div>
    );
}

export default Home;