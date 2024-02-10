import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../../context/CRUDFormStateContext'

const FormSubmitMessage = () => {
  const { state } = useCRUDFormStateContext()

  return (
    <div>
      {state === CRUDFormState.SUCCESS && (
        <p className='success'>Updated successfully</p>
      )}
      {state === CRUDFormState.ERROR && (
        <p className='error'>Something went wrong</p>
      )}
    </div>
  )
}

export default FormSubmitMessage
