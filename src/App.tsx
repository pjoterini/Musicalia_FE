import './styles/global.scss'
import { Route, Routes } from 'react-router-dom'
import Content from './layout/Content/Content'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home'
import ArtistsList from './pages/artists/ArtistsList'
import SongsList from './pages/songs/SongsList'
import EditArtist from './pages/artists/EditArtist'
import NewSong from './pages/songs/NewSong'
import NewArtist from './pages/artists/NewArtist'
import EditSong from './pages/songs/EditSong'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<ArtistsList />} />
          <Route path='/artists/:id' element={<EditArtist />} />
          <Route path='/artists/new' element={<NewArtist />} />
          <Route path='/songs' element={<SongsList />} />
          <Route path='/songs/:id' element={<EditSong />} />
          <Route path='/songs/new' element={<NewSong />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default App
