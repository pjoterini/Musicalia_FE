interface IProps {
  artist: IArtist
  cover: string
}

const ArtistCard = ({ artist, cover }: IProps) => {
  return (
    <>
      <div>{artist.name}</div>
      <img src={`data:image/png;base64,${cover}`} alt='' />
    </>
  )
}

export default ArtistCard