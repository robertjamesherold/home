import { forwardRef } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>
{
  children: React.ReactNode
  outerClass?: string
  innerClass?: string
  className?: string
}

const Container = forwardRef<HTMLDivElement, ContainerProps>( (
  { children, outerClass, innerClass, className, ...rest },
  ref
) =>
{
  const hasOuterClass = outerClass !== undefined
  const hasInnerClass = innerClass !== undefined

  return (
    <>
      { ( hasOuterClass || hasInnerClass ) ? (
        <div className={ outerClass }>
          <div className={ innerClass } ref={ ref } { ...rest }>{ children }</div>
        </div>
      ) : (
        <div className={ className } ref={ ref } { ...rest }>{ children }</div>
      ) }
    </>
  )
} )

export default Container