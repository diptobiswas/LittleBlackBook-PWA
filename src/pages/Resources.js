import { Flex, useBreakpointValue } from "@aws-amplify/ui-react";
import { UnsavedResourceCardCollection, UnsavedResourceCardCollectionMobile } from "../ui-components"

function Resources(){

    const ResourceCollection = useBreakpointValue({
        small: <UnsavedResourceCardCollectionMobile></UnsavedResourceCardCollectionMobile>,
        large: <UnsavedResourceCardCollection margin={'auto'}></UnsavedResourceCardCollection>
      })

    return (
        <div>
            <Flex height={20}></Flex>
            {ResourceCollection}
            <Flex height={100}></Flex>
        </div>
    );
}

export default Resources;