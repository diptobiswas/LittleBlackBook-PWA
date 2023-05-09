import {EventPage1, EventPage1Mobile} from '../ui-components'
import { useBreakpointValue, Flex } from '@aws-amplify/ui-react'

function Event1(){
    const EventPage=useBreakpointValue({
        small: <EventPage1Mobile margin={'auto'}></EventPage1Mobile>,
        large: <EventPage1 margin={'auto'}></EventPage1>
    })

    return (
        <div>
            <Flex height={20}></Flex>
            {EventPage}
            <Flex height={20}></Flex>
        </div>
    )
}

export default Event1