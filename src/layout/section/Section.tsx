type SectionProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLElement>

const Section: React.FC<SectionProps> = ( { children, className }: { children: React.ReactNode, className?: string } ) =>
{
  return (
    <section className={ `relative ${ className }` }>
      { children }
    </section>
  )
}

export default Section
