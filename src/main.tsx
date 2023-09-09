import './index.sass'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { LoadingProvider, TrailerProvider } from './core/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <TrailerProvider>
        <App />
      </TrailerProvider>
    </LoadingProvider>
  </React.StrictMode>
)
