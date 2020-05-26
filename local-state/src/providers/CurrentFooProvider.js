import React, { useMemo, useState } from 'react';

const Context = React.createContext();

const CurrentFooProvider= ({ children }) => {
  const [currentFooId, setCurrentFooId] = useState('Rm9vOmVjYTI1MzEwLWFiOTktNDMyYi1iZWIzLTIwNjI4ZWQxNGYxZA==');

  const ctx = useMemo(() => {
    return {
      currentFooId,
      setCurrentFooId: async (fooId) => setCurrentFooId(fooId),
    };
  }, [currentFooId]);

  return (
    <Context.Provider value={ctx}>
      {children}
    </Context.Provider>
  );
};

export { CurrentFooProvider, Context as CurrentFooContext }