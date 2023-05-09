import {TopicButtonCollection, TopicIconCollection, OrganizationButton, OrganizationButtonMobileCollection, OrganizationButtonDesktopCollection, SearchTitleDesktop, SavedTitleMobile, SearchTitleMobile, UnsavedResourceCardCollection, UnsavedResourceCardCollectionMobile} from '../ui-components';
import {Flex, useBreakpointValue } from '@aws-amplify/ui-react'

function Search() {

  const Topics = useBreakpointValue({
    small: <TopicIconCollection margin={'auto'}></TopicIconCollection>,
    large: <TopicButtonCollection margin={'auto'}></TopicButtonCollection>
  })

  const OrganizationIcons = useBreakpointValue({
    small: <OrganizationButtonMobileCollection margin={'auto'}> </OrganizationButtonMobileCollection>,
    large: <OrganizationButtonDesktopCollection margin={'auto'}> </OrganizationButtonDesktopCollection>
  })

  const SearchTitle = useBreakpointValue({
    small: <SearchTitleMobile margin={30}></SearchTitleMobile>,
    large: <SearchTitleDesktop margin={30}></SearchTitleDesktop>
  })

  const ResourceCollection = useBreakpointValue({
    small: <UnsavedResourceCardCollectionMobile></UnsavedResourceCardCollectionMobile>,
    large: <UnsavedResourceCardCollection margin={'auto'}></UnsavedResourceCardCollection>
  })
    
  return (
    <div className="search">
      {SearchTitle}
      {ResourceCollection}
      <Flex height={20}></Flex>
      
      <Flex height={50} justifyContent={'center'}>
      <h2>Browse by Topics</h2>
      </Flex>
      <Flex height={20}></Flex>
      {Topics}

      <Flex height={50} justifyContent={'center'}>
      <h2>Browse by Organizations</h2>
      </Flex>
      <Flex height={20}></Flex>
      {OrganizationIcons}
      <Flex height={100}></Flex>
    </div>
  );
}

export default Search;