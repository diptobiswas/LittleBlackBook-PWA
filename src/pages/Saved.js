import {SavedTitleDesktop, SavedTitleMobile, SavedResourceCardCollection, SavedResourceCardCollectionMobile} from '../ui-components';
import {useBreakpointValue, SearchField, Flex } from '@aws-amplify/ui-react'

function Saved() {

  const savedTitle = useBreakpointValue({
    small: <SavedTitleMobile margin={30}></SavedTitleMobile>,
    large: <SavedTitleDesktop margin={30}></SavedTitleDesktop>
  })

  const savedResourceCollection = useBreakpointValue({
    small: <SavedResourceCardCollectionMobile margin={'auto'}></SavedResourceCardCollectionMobile>,
    large: <SavedResourceCardCollection margin={'auto'}></SavedResourceCardCollection>
  })

    return (
      <div className="saved">
        {savedTitle}
        {savedResourceCollection}
        <Flex height={100}></Flex>
      </div>
    );
}

export default Saved;