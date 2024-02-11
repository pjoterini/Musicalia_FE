import React, { createContext, useContext, useState } from 'react'

type CRUDFormStateContextProviderProps = {
  children: React.ReactNode
}

export enum CRUDFormState {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error'
}

type CRUDFormStateContext = {
  state: CRUDFormState
  setState: React.Dispatch<React.SetStateAction<CRUDFormState>>
}

export const CRUDFormStateContext = createContext<CRUDFormStateContext | null>(
  null
)

const CRUDFormStateContextProvider = ({
  children
}: CRUDFormStateContextProviderProps) => {
  const [state, setState] = useState<CRUDFormState>(CRUDFormState.PENDING)

  return (
    <CRUDFormStateContext.Provider value={{ state, setState }}>
      {children}
    </CRUDFormStateContext.Provider>
  )
}

export const useCRUDFormStateContext = () => {
  const context = useContext(CRUDFormStateContext)
  if (!context) {
    throw new Error(
      'useCRUDFormContext must be used within a CRUDFormContextProvider'
    )
  }

  return context
}

export default CRUDFormStateContextProvider
