import { commitLocalUpdate, ConnectionHandler, Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';
import CurrentFooHandler from './handlers/CurrentFoo';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

const handlerProvider = (handle) => {
  switch (handle) {
    case 'currentFoo':
      return CurrentFooHandler;
    case 'connection':
      return ConnectionHandler;
    default:
      throw new Error(`Handler for ${handle} not found.`);
  }
};

// Export a singleton instance of Relay Environment configured with our network function:
const environment = new Environment({
  handlerProvider,
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10,
  }),
});

// set init client state values
commitLocalUpdate(environment, store => {
  console.log(store);
  const fieldKey = 'localState';

  // eslint-disable-next-line no-underscore-dangle
  const __typename = 'LocalState';

  const dataID = `client:root:${fieldKey}`; // try __typename

  const record = store.create(dataID, __typename);
  const record2 = store.create(`client:root:${fieldKey}:currentFoo`, 'Foo');

  record2.setValue(null, 'currentFoo');
  record.setLinkedRecord(record2, 'currentFoo');

  store.getRoot().setLinkedRecord(record, 'localState');
});

export default environment;