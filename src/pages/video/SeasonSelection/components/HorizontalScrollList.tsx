import React, { useEffect } from "react"
import { useDragScroll } from '../hooks/useDragScoll'
import type { Props } from '../types'

const HorizontalScrollList: React.FC<Props> = ( { title, images, wheelMultiplier = 1, wheelRequiresShift = false, style, }: Props ) =>
{
    const ref = useDragScroll()
    useEffect( () =>
    {
        const el = ref.current
        if ( !el ) return

        const onWheel = ( e: WheelEvent ) =>
        {
            if ( wheelRequiresShift && !e.shiftKey ) return
            // Verwende deltaY (meist vertikal) und fallback auf deltaX
            const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX
            if ( !delta ) return
            e.preventDefault() // verhindert vertikales Scrollen der Seite
            el.scrollLeft += delta * wheelMultiplier
        }

        el.addEventListener( "wheel", onWheel as EventListener, { passive: false } )
        return () => el.removeEventListener( "wheel", onWheel as EventListener )
    }, [ ref, wheelMultiplier, wheelRequiresShift ] )

    return (
        <section className='overflow-hidden'>
            <div className='main pb-4 max-h-11'>
                <h3 className='text-xl font-bold leading-7 text-left'>{ title }</h3>
            </div>
            <div
                ref={ ref }
                style={ { overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch", scrollbarWidth: 'none', ...style } }
                id="draggable"
                className='draggable flex flex-row main w-screen overflow-y-hidden overscroll-x-contain bg-scroll scrollbar-hide scroll-smooth cursor-grab 
'>
                { images.map( ( image, index ) => (
                    <li key={ index } className='select-none h-39 min-w-69 rounded-2xl overflow-hidden mr-6 last:mr-0 
'>
                        <img draggable='false' className='select-none h-full w-full object-cover' src={ image } alt='alt' />
                    </li> ) ) }
            </div>
        </section>

    )
}

export default HorizontalScrollList