import { Flex, useBreakpointValue } from "@aws-amplify/ui-react";
import { ResourceCard, SavedResourceCardCollection, UnsavedResourceCardCollection } from "../ui-components"

function Resources(){

    const ResourceCard2= useBreakpointValue({
        small: <SavedResourceCardCollection variant={'small'} margin={'auto'} marginTop={20}></SavedResourceCardCollection>,
        large: <UnsavedResourceCardCollection variant={'expanded_saved'} margin={'auto'}></UnsavedResourceCardCollection>
    })

    return (
        <div>
            <Flex height={20}></Flex>
            {ResourceCard2}
        </div>
    );
}

export default Resources;