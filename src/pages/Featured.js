import {FeaturedPageDesktopCollection, FeaturedPageMobileCollection} from '../ui-components'
import { useBreakpointValue} from '@aws-amplify/ui-react'

function Featured(){

    const FeaturedPage=useBreakpointValue({
        small: <FeaturedPageMobileCollection margin={'auto'}></FeaturedPageMobileCollection>,
        large: <FeaturedPageDesktopCollection margin={'auto'}></FeaturedPageDesktopCollection>
    })

    return (
        <div>
            {FeaturedPage}
        </div>
    )
}

export default Featured