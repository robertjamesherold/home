import { useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { LatencyLoader } from '@components/LatencyLoader'
import { useLatencyLoader } from '@hooks/useLatencyLoader'
import { Skeleton, SelectTrigger } from '@ui/.'
import { cn } from '@/ui/utils';

type ImageProps = {
    src?: string
    alt?: string
    className?: string
    imageClassName?: string
    isAbsolute?: boolean
    fallback?: ReactNode
    showLatencyIndicator?: boolean
    loaderLabel?: string
    showSkeleton?: boolean
    skeletonClassName?: string
}

const Image: FC<ImageProps> = ( {
    src,
    alt = '',
    className,
    imageClassName,
    isAbsolute = false,
    showLatencyIndicator = true,
    loaderLabel = 'Bild wird geladen …',
    showSkeleton = true,
    skeletonClassName,
} ) =>
{
    const [ isLoaded, setIsLoaded ] = useState( false )
    const { isVisible, progress, start, resolve, reset } = useLatencyLoader( {
        delay: 320,
        finishDelay: 220,
    } )
    const shouldShowSkeleton = showSkeleton && !isLoaded && isVisible

    const handleComplete = async () =>
    {
        if ( !isLoaded )
        {
            try
            {
                await start()
                setIsLoaded( true )
                resolve()
            } catch
            {
                reset()
                setIsLoaded( false )

            }
        }

        return Promise.resolve()
    }



    return (
        <div
            className={ cn(
                ' overflow-hidden',
                isAbsolute ? 'absolute inset-0' : 'relative',
                className
            ) }
        >
            { shouldShowSkeleton && (
                <Skeleton
                    data-testid="image-skeleton"
                    onLoad={ handleComplete }

                    className={ cn( 'absolute inset-0 z-100', skeletonClassName ) }
                />
            ) }


            <img
                src={ src }
                alt={ alt }
                loading="lazy"
                onLoad={ () => Promise.resolve().then( handleComplete ) }
                className={ cn(
                    'relative h-full w-full object-cover transition-opacity duration-300',
                    isVisible ? 'opacity-100' : 'opacity-0',
                    imageClassName ) }
            />

            { showLatencyIndicator && src && (
                <LatencyLoader
                    isVisible={ isVisible && isLoaded }
                    progress={ progress }
                    label={ loaderLabel }
                />
            ) }
        </div>
    )
};

export default Image
