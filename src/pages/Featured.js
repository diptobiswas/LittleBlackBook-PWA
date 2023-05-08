import {FeaturedPageDesktopCollection, FeaturedPageMobileCollection} from '../ui-components'
import { Flex, useBreakpointValue} from '@aws-amplify/ui-react'

function Featured(){

    const FeaturedPage=useBreakpointValue({
        small: <FeaturedPageMobileCollection margin={'auto'}></FeaturedPageMobileCollection>,
        large: <FeaturedPageDesktopCollection margin={'auto'}></FeaturedPageDesktopCollection>
    })

    return (
        <div>
            <Flex height={20} ></Flex>
            {FeaturedPage}
            <Flex height={300} ></Flex>
        </div>
    )
}

export default Featured