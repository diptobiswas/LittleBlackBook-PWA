import {EmergencyButtonDesktopCollection, EmergencyTitleMobile, EmergencyTitleDesktop, EmergencyButtonMobileCollection} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'

function Emergency() {

  const EmergencyTitle = useBreakpointValue({
    small: <EmergencyTitleMobile margin={'auto'} marginBottom={20} marginTop={20} height={'auto'}></EmergencyTitleMobile>,
    large: <EmergencyTitleDesktop margin={30}></EmergencyTitleDesktop>
  })

  const EmergencyCollection = useBreakpointValue({
    small: <EmergencyButtonMobileCollection margin={'auto'} marginBlockEnd={100}></EmergencyButtonMobileCollection>,
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