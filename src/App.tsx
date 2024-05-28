import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Tabs from './components/Tabs';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Tabs />
      </div>
    </ChakraProvider>
  );
}

export default App;
