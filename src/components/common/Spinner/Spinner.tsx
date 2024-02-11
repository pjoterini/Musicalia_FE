import { CSSProperties } from 'react'
import { GridLoader } from 'react-spinners'

interface IProps {
  loading: boolean | undefined
}

const containerStyles: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}

const override: CSSProperties = {
  padding: '6rem 0'
}

const Spinner = ({ loading }: IProps) => {
  return (
    <div style={containerStyles}>
      <GridLoader
        color='white'
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Spinner
