import {TopicButtonCollection, TopicIconCollection} from '../ui-components';
import {useBreakpointValue, SearchField } from '@aws-amplify/ui-react'

function Search() {

  const Topics = useBreakpointValue({
    small: <TopicIconCollection></TopicIconCollection>,
    large: <TopicButtonCollection></TopicButtonCollection>
  })


    return (
      <div className="search">
        <SearchField
            placeholder="Search for resources"
        />
        {Topics}
      </div>
    );
}

export default Search;