import { useBreakpointValue } from "@aws-amplify/ui-react";
import { ResourceCard, SavedResourceCardCollection } from "../ui-components"

function Resources(){

    const ResourceCard2= useBreakpointValue({
        small: <ResourceCard variant={'small'} margin={'auto'}></ResourceCard>,
        large: <SavedResourceCardCollection variant={'expanded_saved'} margin={'auto'}></SavedResourceCardCollection>
    })

    return (
        <div>
            {ResourceCard2}
        </div>
    );
}

export default Resources;