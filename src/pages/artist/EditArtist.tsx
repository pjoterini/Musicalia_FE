import { useParams } from 'react-router-dom'

function EditArtist() {
  const { id } = useParams()
  return <>EditArtist {id}</>
}

export default EditArtist
