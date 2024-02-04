import React, { createContext, useContext, useState } from 'react'

type SongsContextProviderProps = {
  children: React.ReactNode
}

type Songs = ISong[] | undefined

type SongsContext = {
  songs: Songs
  setSongs: React.Dispatch<React.SetStateAction<Songs>>
}

export const SongsContext = createContext<SongsContext | null>(null)

const SongsContextProvider = ({ children }: SongsContextProviderProps) => {
  const [songs, setSongs] = useState<Songs>()

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  )
}

export const useSongsContext = () => {
  const context = useContext(SongsContext)
  if (!context) {
    throw new Error(
      'useSongsContext must be used within a SongsContextProvider'
    )
  }

  return context
}

export default SongsContextProvider
