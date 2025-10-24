import NavigationButton from "@ui/Buttons/NavigationButton"

type NavigationProps = {
    total: number
    current: number
    slides: { id: string }[]
    goPrev: () => void
    goNext: () => void
    goTo: ( index: number ) => void
}

const SliderNavigation = ( { total, current, slides, goPrev, goNext, goTo }: NavigationProps ) =>
{
    if ( total <= 1 ) return null

    return (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 sm:gap-6">
            <NavigationButton onClick={ goPrev } isPrev />
            <div className="flex gap-2">
                { slides.map( ( slide, i ) => (
                    <button
                        key={ slide.id }
                        onClick={ () => goTo( i ) }
                        className={ `h-2 w-8 rounded-full ${ i === current ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400" }` }
                        aria-label={ `Slide ${ i + 1 }` }
                    />
                ) ) }
            </div>
            <NavigationButton onClick={ goNext } isNext />
        </div>
    )
}

export default SliderNavigation