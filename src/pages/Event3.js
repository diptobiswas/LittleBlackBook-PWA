import {EventPage3, EventPage3Mobile} from '../ui-components'
import {Flex, useBreakpointValue } from '@aws-amplify/ui-react'

function Event3(){
    const EventPage=useBreakpointValue({
        small: <EventPage3Mobile margin={'auto'}></EventPage3Mobile>,
        large: <EventPage3 margin={'auto'}></EventPage3>
    })

    return (
        <div>
            <Flex height={20}></Flex>
            {EventPage}
            <Flex height={100}></Flex>
        </div>
    )
}

export default Event3