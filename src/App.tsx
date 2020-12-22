import React from 'react';

import CountProvider from './Context/Count';

import Counter from './components/Counter';
import Mirror from './components/Mirror';

function App() {
  return (
    <CountProvider>
      <Counter />

      <br/>

      <Mirror />
    </CountProvider>
  )
  
}

export default App;