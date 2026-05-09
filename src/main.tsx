import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: import.meta.env.VITE_UNLEASH_URL,
  clientKey: import.meta.env.VITE_UNLEASH_CLIENT_KEY,
  appName: import.meta.env.VITE_APP_NAME,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
)