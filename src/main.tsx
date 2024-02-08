import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ArticlesContextProvider from './context/ArticlesContext.tsx'
import ArtistsContextProvider from './context/ArtistsContext.tsx'
import SongsContextProvider from './context/SongsContext.tsx'
import CRUDFormStateContextProvider from './context/CRUDFormStateContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArticlesContextProvider>
      <ArtistsContextProvider>
        <SongsContextProvider>
          <CRUDFormStateContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CRUDFormStateContextProvider>
        </SongsContextProvider>
      </ArtistsContextProvider>
    </ArticlesContextProvider>
  </React.StrictMode>
)
