interface IProps {
  song: ISong
  cover: string
}

const SongCard = ({ song, cover }: IProps) => {
  return (
    <>
      <div>{song.title}</div>
      <img src={`data:image/png;base64,${cover}`} alt='' />
    </>
  )
}

export default SongCard
