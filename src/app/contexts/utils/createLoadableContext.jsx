import React from 'react';
import Loadable from 'react-loadable';

const createLoadableContext = (Context, loader) =>
  Loadable({
    loader,
    loading: () => null,
    render(loaded, { children }) {
      return (
        <Context.Provider value={loaded.default}>{children}</Context.Provider>
      );
    },
  });

export default createLoadableContext;
