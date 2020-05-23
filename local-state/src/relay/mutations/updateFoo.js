import { commitLocalUpdate } from 'react-relay';
import environment from '../RelayEnvironment';

const updateFoo = (dataID) => {
  commitLocalUpdate(environment, store => {
    const record = store.get(dataID);

    if (!record) return;

    const localState = store.getRoot().getLinkedRecord('localState');

    if (!localState) return;

    localState.setLinkedRecord(record, 'currentFoo');

    store.getRoot().setLinkedRecord(localState, 'localState');
  });
};

export default updateFoo;
