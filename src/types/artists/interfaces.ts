interface IArtist {
  _id: string
  name: string
  genre: string
  rating: number
  createdAt: string
  coverImage: {
    data: any
    type: string
  }
}
