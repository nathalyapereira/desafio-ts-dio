import React from 'react';
import { Layout } from './components/Layout';
import { 
  Center,
  ChakraProvider,
  Input,
  Grid,
  GridItem,
  Box,
  Button
 } from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';


function App() {
  return (
    <ChakraProvider >
      <Box width={'100%'} height={'100%'}>
        <Layout >
      <Card />
      </Layout>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
