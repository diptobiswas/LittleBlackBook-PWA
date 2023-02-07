import {EventPage2, EventPage2Mobile} from '../ui-components'
import {Flex, useBreakpointValue } from '@aws-amplify/ui-react'

function Event2(){
    const EventPage=useBreakpointValue({
        small: <EventPage2Mobile margin={'auto'}></EventPage2Mobile>,
        large: <EventPage2 margin={'auto'}></EventPage2>
    })

    return (
        <div>
            <Flex height={20}></Flex>
            {EventPage}
            <Flex height={100}></Flex>
        </div>
    )
}

export default Event2