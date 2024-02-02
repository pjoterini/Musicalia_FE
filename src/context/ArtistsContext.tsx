import React, { createContext, useContext, useState } from 'react'

type ArtistsContextProviderProps = {
  children: React.ReactNode
}

type Artists = IArtist[] | undefined
type ArtistsCovers = string[] | undefined

type ArtistsContext = {
  artists: Artists
  setArtists: React.Dispatch<React.SetStateAction<Artists>>
  artistsCovers: ArtistsCovers
  setArtistsCovers: React.Dispatch<React.SetStateAction<ArtistsCovers>>
}

export const ArtistsContext = createContext<ArtistsContext | null>(null)

const ArtistsContextProvider = ({ children }: ArtistsContextProviderProps) => {
  const [artists, setArtists] = useState<Artists>()
  const [artistsCovers, setArtistsCovers] = useState<ArtistsCovers>()

  return (
    <ArtistsContext.Provider
      value={{ artists, setArtists, artistsCovers, setArtistsCovers }}
    >
      {children}
    </ArtistsContext.Provider>
  )
}

export const useArtistsContext = () => {
  const context = useContext(ArtistsContext)
  if (!context) {
    throw new Error(
      'useArtistsContext must be used within a ArtistsContextProvider'
    )
  }

  return context
}

export default ArtistsContextProvider
