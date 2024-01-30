interface IProps {
  artist: IArtist
  cover: string
}

const ArtistCard = ({ artist, cover }: IProps) => {
  return (
    <div key={artist._id}>
      <div>{artist.name}</div>
      <img src={`data:image/png;base64,${cover}`} alt='' />
    </div>
  )
}

export default ArtistCard
