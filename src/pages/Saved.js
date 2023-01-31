import {SavedTitleDesktop, SavedTitleMobile} from '../ui-components';
import {useBreakpointValue, SearchField } from '@aws-amplify/ui-react'

function Saved() {

  const savedTitle = useBreakpointValue({
    small: <SavedTitleMobile margin={30}></SavedTitleMobile>,
    large: <SavedTitleDesktop margin={30}></SavedTitleDesktop>
  })


    return (
      <div className="saved">
        {savedTitle}
      </div>
    );
}

export default Saved;