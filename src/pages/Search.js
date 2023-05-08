import {TopicButtonCollection, TopicIconCollection, OrganizationButton, OrganizationButtonMobileCollection, OrganizationButtonDesktopCollection} from '../ui-components';
import {Flex, useBreakpointValue, SearchField } from '@aws-amplify/ui-react'

function Search() {

  const Topics = useBreakpointValue({
    small: <TopicIconCollection position={'relative'} margin={'auto'}></TopicIconCollection>,
    large: <TopicButtonCollection position={'relative'}></TopicButtonCollection>
  })

  const OrganizationIcons = useBreakpointValue({
    small: <OrganizationButtonMobileCollection> margin={'auto'}</OrganizationButtonMobileCollection>,
    large: <OrganizationButtonDesktopCollection> margin={'auto'}</OrganizationButtonDesktopCollection>
  })


    return (
      <div className="search">
        <SearchField padding={30}
            placeholder="Search for resources"
        />
        {Topics}
        {OrganizationIcons}
        <Flex height={100}></Flex>
      </div>
    );
}

export default Search;