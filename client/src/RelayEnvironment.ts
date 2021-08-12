// your-app-name/src/RelayEnvironment.js
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetches from './fetchGraphQL';


// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
function fetchRelay(params: any, variables: any) {
    // return fetches.fetchGraphQL(params.text, variables);
    return fetches.fetchGraphQLWithDeferred(params.text, variables);
    // return fetches.fetchGraphQLObs(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
    // @ts-ignore
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});