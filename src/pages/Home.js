import {EventCardExpandedCollection, EventCardDefaultCollection,TopicIconDesktopCollection,
FeaturedCardDesktopCollection, FeaturedCardMobileCollection} from '../ui-components';
import { Flex, useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
  
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
  
    const TopicIcons= useBreakpointValue({
      large: <TopicIconDesktopCollection margin={30}></TopicIconDesktopCollection>,
    })
    
    return (
      <div className="home">
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