import { useEffect, useMemo, useState } from "react"
import type { SliderCard } from "../types"

export function useSlider(slides: SliderCard[]) {
  const total = slides.length
  const [current, setCurrent] = useState(0)
  const [visual, setVisual] = useState(total > 1 ? 1 : 0)
  const [transition, setTransition] = useState(true)

  const extended = useMemo(() => {
    if (total <= 1) return slides
    const first = slides[1]
    const last = slides[total - 1]
    return [last, ...slides, first]
  }, [slides, total])

  useEffect(() => {
    if (total <= 1) {
      setCurrent(0)
      setVisual(1)
    } else {
      setCurrent(1)
      setVisual(0)
    }
  }, [total])

  useEffect(() => {
    if (!transition) {
      const id = requestAnimationFrame(() => setTransition(true))
      return () => cancelAnimationFrame(id)
    }
  }, [transition])

  const goPrev = () => {
    if (total <= 1) return
    setTransition(true)
    setCurrent(p => (p - 1 + total) % total)
    setVisual(v => v - 1)
  }

  const goNext = () => {
    if (total <= 1) return
    setTransition(true)
    setCurrent(p => (p + 1) % total)
    setVisual(v => v + 1)
  }

  const goTo = (index: number) => {
    if (total <= 1) return
    const target = (index + total) % total
    if (target === current) return
    setTransition(true)
    setCurrent(target)
    setVisual(target + 1)
  }

  const onTransitionEnd = () => {
    if (total <= 1) return
    if (visual === 0) {
      setTransition(false)
      setVisual(total)
    } else if (visual === total) {
      setTransition(false)
      setVisual(0)
    }
  }

  return { total, current, visual, transition, extended, goPrev, goNext, goTo, onTransitionEnd }
}