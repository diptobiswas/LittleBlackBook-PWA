import {EventCardExpandedCollection, EventCardDefaultCollection, 
  TopicIconDesktopCollection, 
  FeaturedCardDesktopCollection, FeaturedCardMobileCollection, 
  UnsavedResourceCardCollection, UnsavedResourceCardCollectionMobile } from '../ui-components';
import { Flex, useBreakpointValue } from '@aws-amplify/ui-react'

import React, {  } from "react";

function Home() {
    const ResourceCollection = useBreakpointValue({
      small: <UnsavedResourceCardCollectionMobile></UnsavedResourceCardCollectionMobile>,
      large: <UnsavedResourceCardCollection margin={'auto'}></UnsavedResourceCardCollection>
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
  
    const TopicIcons= useBreakpointValue({
      large: <TopicIconDesktopCollection margin={30}></TopicIconDesktopCollection>,
    })
    
    return (
      <div className="home">
        <Flex height={20}></Flex>
        <Flex display={'horizontal direction'} justifyContent={'center'}>
            {FeaturedCardDesktop}
            {TopicIcons}
        </Flex>
        {FeaturedCardMobile}
        <Flex height={30}></Flex>
        {EventCard}
        <Flex height={50}></Flex>
        {ResourceCollection}
        <Flex height={100}></Flex>
      </div>
    )
};

export default Home;