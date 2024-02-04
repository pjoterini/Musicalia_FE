import { ContainerType } from '../common/CardContainer/enums'

export interface ISong {
  _id: string
  artist: {
    name: string
    genre: string
    rating: number
  }
  title: string
  rating: number
  createdAt: string
  coverImage: string
}

export interface ISongsContainer {
  songs: ISong[]
  containerType: ContainerType
  gridStyle?: React.CSSProperties
}
