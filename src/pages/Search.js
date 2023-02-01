import {TopicButtonCollection, TopicIconCollection, OrganizationButton, OrganizationButtonMobileCollection, OrganizationButtonDesktopCollection} from '../ui-components';
import {useBreakpointValue, SearchField } from '@aws-amplify/ui-react'

function Search() {

  const Topics = useBreakpointValue({
    small: <TopicIconCollection position={'relative'} margin={'auto'}></TopicIconCollection>,
    large: <TopicButtonCollection position={'relative'}></TopicButtonCollection>
  })

  const OrganizationIcons = useBreakpointValue({
    small: <OrganizationButtonMobileCollection> margin={30}</OrganizationButtonMobileCollection>,
    large: <OrganizationButtonDesktopCollection> margin={30}</OrganizationButtonDesktopCollection>
  })


    return (
      <div className="search">
        <SearchField
            placeholder="Search for resources"
        />
        {Topics}
        {OrganizationIcons}
      </div>
    );
}

export default Search;