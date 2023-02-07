import {EventPage3, EventPage3Mobile} from '../ui-components'
import { useBreakpointValue } from '@aws-amplify/ui-react'

function Event3(){
    const EventPage=useBreakpointValue({
        small: <EventPage3Mobile margin={'auto'}></EventPage3Mobile>,
        large: <EventPage3 margin={'auto'}></EventPage3>
    })

    return (
        <div>
            {EventPage}
        </div>
    )
}

export default Event3