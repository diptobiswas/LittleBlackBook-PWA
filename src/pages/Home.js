import {EventCardExpandedCollection, EventCardDefaultCollection, EventCardExpanded, 
  EventCardDefault, NavbarDesktop, TopbarMobile, FeaturedCardDesktop, TopicIcon, 
  TopicIconDesktopCollection, DiscoverMobile, NavBarMobile, SearchBarMobile, FeaturedCardMobile, 
  FeaturedCardDesktopCollection, FeaturedCardMobileCollection, OrganizationButtonDesktopCollection,
  UnsavedResourceCardCollection, UnsavedResourceCardCollectionMobile } from '../ui-components';
import { Flex, SearchField, useBreakpointValue } from '@aws-amplify/ui-react'
import SearchResource from '../custom-components/SearchResource';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { searchResources, listResources } from '../graphql/queries';

import React, { useState, useEffect } from "react";

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
  
    const DiscoverBar= useBreakpointValue({
      small: <DiscoverMobile margin={'auto'}></DiscoverMobile>,
      large: <></>
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