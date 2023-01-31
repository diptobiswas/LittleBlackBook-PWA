import {EmergencyButtonDesktopCollection, EmergencyTitleMobile, EmergencyTitleDesktop, EmergencyButtonMobileCollection} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'

function Emergency() {

  const EmergencyTitle = useBreakpointValue({
    small: <EmergencyTitleMobile margin={30}></EmergencyTitleMobile>,
    large: <EmergencyTitleDesktop margin={30}></EmergencyTitleDesktop>
  })

  const EmergencyCollection = useBreakpointValue({
    small: <EmergencyButtonMobileCollection margin={30}></EmergencyButtonMobileCollection>,
    large: <EmergencyButtonDesktopCollection margin={'auto'}></EmergencyButtonDesktopCollection>
  })


    return (
      <div className="emergency">
        {EmergencyTitle}
        {EmergencyCollection}
      </div>
    );
}

export default Emergency;