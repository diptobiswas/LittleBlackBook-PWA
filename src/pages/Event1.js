import {EventPage1, EventPage1Mobile} from '../ui-components'
import { useBreakpointValue } from '@aws-amplify/ui-react'

function Event1(){
    const EventPage=useBreakpointValue({
        small: <EventPage1Mobile margin={'auto'}></EventPage1Mobile>,
        large: <EventPage1 margin={'auto'}></EventPage1>
    })

    return (
        <div>
            {EventPage}
        </div>
    )
}

export default Event1