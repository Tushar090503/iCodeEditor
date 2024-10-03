// App.jsx
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';
import Login from './components/Login'; // Import Login

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'white' : '#1c2130',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" minW="100vw" px={6} py={8}>
        <Login /> {/* Add Login component here */}
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
