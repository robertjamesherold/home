import { useState, useEffect } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

export const useProjectPreview = () => {
  const { width } = useWindowSize()
  const [isPadding, setIsPadding] = useState('p-16')
  const [isSpan, setIsSpan] = useState('col-span-12')
  const [isImageSpan, setIsImageSpan] = useState('col-span-12')

  useEffect(() => {
    setIsPadding(
      width >= 1024 ? 'p-8'
      : width >= 800 ? 'p-6'
      : width >= 678 ? 'p-4'
      : width >= 480 ? 'p-0'
      : 'p-0'
    )
    setIsSpan(
      width >= 1024 ? 'col-span-6'
      : width >= 800 ? 'col-span-7'
      : width >= 678 ? 'col-span-8'
      : 'col-span-12'
    )
    setIsImageSpan(
      width >= 1024 ? 'col-span-6'
      : width >= 800 ? 'col-span-5'
      : width >= 678 ? 'col-span-4'
      : 'col-span-12'
    )
  }, [width])

  return { isPadding, isSpan, isImageSpan }
}