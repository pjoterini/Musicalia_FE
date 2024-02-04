import { ContainerType } from '../common/CardContainer/enums'

export interface IArtist {
  _id: string
  name: string
  genre: string
  rating: number
  createdAt: string
  coverImage: string
}

export interface IArtistsContainer {
  artists: IArtist[]
  containerType: ContainerType
  gridStyle?: React.CSSProperties
}
