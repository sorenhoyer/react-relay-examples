const CurrentFooHandler = {
  update(store, payload) {
    console.log('HANDLER');
    console.log(store);
    console.log(payload);

    const primaryFoo = store.get(payload.dataID)?.getLinkedRecord(payload.fieldKey);

    if (!primaryFoo) return;

    // eslint-disable-next-line no-unused-expressions
    store
      .getRoot()
      ?.getLinkedRecord('localState')
      ?.setLinkedRecord(primaryFoo, 'currentFoo');

    // eslint-disable-next-line no-unused-expressions
    store.getRoot()?.setLinkedRecord(primaryFoo, payload.handleKey);
  }
};

export default CurrentFooHandler;