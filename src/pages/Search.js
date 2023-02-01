import {TopicButtonCollection, TopicIconCollection, OrganizationButton, OrganizationButtonMobileCollection, OrganizationButtonDesktopCollection} from '../ui-components';
import {useBreakpointValue, SearchField } from '@aws-amplify/ui-react'

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
        <SearchField marginLeft={110} marginTop={30} marginRight={110} marginBottom={20}
            placeholder="Search for resources"
        />
        {Topics}
        {OrganizationIcons}
      </div>
    );
}

export default Search;