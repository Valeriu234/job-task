import React, { useState } from 'react';

import ArticleContext from './ArticleContext';

function MyProvider({ children }) {
  const [id, setId] = useState(null);
  const value = { id, setId };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

export default MyProvider;
