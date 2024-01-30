interface ISong {
  _id: string
  artist: {
    name: string
    genre: string
    rating: number
  }
  title: string
  rating: number
  createdAt: string
  coverImage: {
    data: any
    type: string
  }
}
