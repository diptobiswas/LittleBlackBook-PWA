// import {serializeModel} from "@aws-amplify/datastore/ssr";
// import {DataStore, Amplify, withSSRContext} from "aws-amplify";

// import {EventCardExpanded} from "../ui-components";
// import {EventCardExpanded as EventCardExpandedModel} from "../models"

// export async function getStaticPaths({req}) {
//     const SSR = withSSRContext({req});
//     const EventCardExpandeds = await SSR.DataStore.query(EventCardExpandedModel);

//     return {
//         paths: EventCardExpandeds.map(EventCardExpanded => ({ params: {id: EventCardExpanded.id}})),
//         fallback: true
//     };
// }

// export async function getStaticProps(context) {
//     const SSR=withSSRContext({ context});
//     const eventcardexpanded = await SSR.DataStore.query(EventCardExpandedModel, context.params.id);

//     return {
//         props: { eventcardexpanded: serializeModel(eventcardexpanded)},
//     }
// }

// export default function EventCardExpandedDetail() {
//     return ( 
//     <div>
//     <h1>hello</h1>
//     </div>
//     )
// }