import React, { createContext, useContext, useState } from 'react'

type ArtistsContextProviderProps = {
  children: React.ReactNode
}

type Artists = IArtist[] | undefined

type ArtistsContext = {
  artists: Artists
  setArtists: React.Dispatch<React.SetStateAction<Artists>>
}

export const ArtistsContext = createContext<ArtistsContext | null>(null)

const ArtistsContextProvider = ({ children }: ArtistsContextProviderProps) => {
  const [artists, setArtists] = useState<Artists>()

  return (
    <ArtistsContext.Provider value={{ artists, setArtists }}>
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
