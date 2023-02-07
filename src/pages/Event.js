import {EventPageDesktopCollection, EventPageMobileCollection, EventCardExpandedCollection} from '../ui-components';
import {useBreakpointValue } from '@aws-amplify/ui-react'

function Event (){

    const EventPage= useBreakpointValue({
        small: <EventPageMobileCollection></EventPageMobileCollection>, 
        large: <EventPageDesktopCollection position={'absolute'}></EventPageDesktopCollection>
    })

    return (
    <div>
        {EventPage}
    </div>
    )
}

export default Event