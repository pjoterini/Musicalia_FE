import { Route, Routes } from 'react-router-dom'
import Content from './layout/Content/Content'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import ArtistsList from './pages/artists/ArtistsList'
import CreateArtist from './pages/artists/CreateArtist'
import EditArtist from './pages/artists/EditArtist'
import CreateSong from './pages/songs/CreateSong'
import EditSong from './pages/songs/EditSong'
import SongsList from './pages/songs/SongsList'

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists'>
            <Route index element={<ArtistsList />} />
            <Route path=':id' element={<EditArtist />} />
            <Route path='new' element={<CreateArtist />} />
          </Route>
          <Route path='/songs'>
            <Route index element={<SongsList />} />
            <Route path=':id' element={<EditSong />} />
            <Route path='new' element={<CreateSong />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default App
