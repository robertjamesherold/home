type SectionProps = {
  children: React.ReactNode
  className?: string
  isBox?: boolean
  id?: string
} & React.HTMLAttributes<HTMLElement>

const Section: React.FC<SectionProps> = ( { children, className, isBox, id }: { children: React.ReactNode, className?: string, isBox?: boolean, id?: string } ) =>
{
  return (
    <section id={ id } className={ `relative ${ className }` }>
      { isBox ? <div className='section safe-area-padding'>
        { children }
      </div> : children }
    </section>
  )
}

export default Section
