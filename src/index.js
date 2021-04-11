import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import '@fontsource/inter/400.css';
import '@fontsource/inter/800.css';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          body:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        },
      })}
    >
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
