<<<<<<< HEAD
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

=======
import {EventCardExpandedCollection, EventCardDefaultCollection,TopicIconDesktopCollection,
FeaturedCardDesktopCollection, FeaturedCardMobileCollection} from '../ui-components';
import { Flex, useBreakpointValue } from '@aws-amplify/ui-react'

function Home() {
  
>>>>>>> 29ea981d3d45e74b518054f9b17450829f1000a9
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
<<<<<<< HEAD
        <Flex height={20}></Flex>
=======
>>>>>>> 29ea981d3d45e74b518054f9b17450829f1000a9
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