export type SliderCard = {
  id: number | string
  title: string
  text: string
  image?: string
  eyebrow?: string
  ctaLabel?: string
  ctaHref?: string
}

export interface SliderProps {
  slides?: SliderCard[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
  renderSlideContent?: (slide: SliderCard) => React.ReactNode
  cardHeight?: string | number
}