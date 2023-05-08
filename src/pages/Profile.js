import { useBreakpointValue } from "@aws-amplify/ui-react"
import { OrganizationButton, ProfilePageDesktop, ProfilePageMobile } from "../ui-components"

function Profile(){

    const ProfilePage= useBreakpointValue({
        small: <ProfilePageMobile margin={'auto'}></ProfilePageMobile>,
        large: <ProfilePageDesktop margin={'auto'}></ProfilePageDesktop>
    })

    return (<div>
        {ProfilePage}
    </div>
    );
}

export default Profile;