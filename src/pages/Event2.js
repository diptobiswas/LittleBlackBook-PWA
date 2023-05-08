import {EventPage2, EventPage2Mobile} from '../ui-components'
import { useBreakpointValue } from '@aws-amplify/ui-react'

function Event2(){
    const EventPage=useBreakpointValue({
        small: <EventPage2Mobile margin={'auto'}></EventPage2Mobile>,
        large: <EventPage2 margin={'auto'}></EventPage2>
    })

    return (
        <div>
            {EventPage}
        </div>
    )
}

export default Event2