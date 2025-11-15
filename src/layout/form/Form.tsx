import { forwardRef } from 'react'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

const Form = forwardRef<HTMLFormElement, FormProps>( (
  { children, className = '', ...props },
  ref
) =>
{
  return (
    <form
      ref={ ref }
      { ...props }
      className={ [ 'flex flex-col', className ].filter( Boolean ).join( ' ' ) }
    >
      { children }
    </form>
  )
} )

Form.displayName = 'Form'

export default Form;
