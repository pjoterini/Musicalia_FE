import { useParams } from 'react-router-dom'

function EditArtist() {
  const { id } = useParams()
  return <div>EditArtist {id}</div>
}

export default EditArtist
