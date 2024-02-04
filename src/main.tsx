import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ArticlesContextProvider from './context/ArticlesContext.tsx'
import ArtistsContextProvider from './context/ArtistsContext.tsx'
import SongsContextProvider from './context/SongsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArticlesContextProvider>
      <ArtistsContextProvider>
        <SongsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SongsContextProvider>
      </ArtistsContextProvider>
    </ArticlesContextProvider>
  </React.StrictMode>
)
