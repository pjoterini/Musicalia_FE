import './styles/global.scss'
import { Route, Routes } from 'react-router-dom'
import Content from './layout/Content/Content'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home'
import Artists from './pages/artist/Artists'
import Songs from './pages/song/Songs'
import EditArtist from './pages/artist/EditArtist'
import NewSong from './pages/song/NewSong'
import NewArtist from './pages/artist/NewArtist'
import EditSong from './pages/song/EditSong'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/artists/new' element={<NewArtist />} />
          <Route path='/artists/:id' element={<EditArtist />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/songs/new' element={<NewSong />} />
          <Route path='/songs/:id' element={<EditSong />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default App
