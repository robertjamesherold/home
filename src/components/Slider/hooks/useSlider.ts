import { useEffect, useMemo, useReducer, useRef, type TransitionEvent } from "react"
import { sliderReducer } from "./useSliderReducer"
import type { SliderCard } from "../types"

export function useSlider(slides: SliderCard[]) {
  const total = slides.length

  const [state, dispatch] = useReducer(sliderReducer, {
    current: 0,
    visual: total > 1 ? 1 : 0,
    transition: true,
  })

  const animatingRef = useRef(false)

  const extended = useMemo(() => {
    if (total <= 1) return slides
    const last = slides[total - 1]
    const first = slides[0]
    return [last, ...slides, first]
  }, [slides, total])

  useEffect(() => {
    animatingRef.current = false
    dispatch({ type: "INIT", total })
  }, [total])

  useEffect(() => {
    if (!state.transition) {
      const id = requestAnimationFrame(() => dispatch({ type: "ENABLE_TRANSITION" }))
      return () => cancelAnimationFrame(id)
    }
  }, [state.transition])

  const goNext = () => {
    if (total <= 1 || animatingRef.current) return
    animatingRef.current = true
    dispatch({ type: "NEXT", total })
  }

  const goPrev = () => {
    if (total <= 1 || animatingRef.current) return
    animatingRef.current = true
    dispatch({ type: "PREV", total })
  }

  const goTo = (index: number) => {
    if (total <= 1 || animatingRef.current) return
    const target = (index + total) % total
    if (target === state.current) return
    animatingRef.current = true
    dispatch({ type: "GOTO", index: target, total })
  }

  const onTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return
    if (total <= 1) return

    animatingRef.current = false

    if (state.visual <= 0) dispatch({ type: "WRAP_START", total })
    else if (state.visual >= total + 1) dispatch({ type: "WRAP_END" })
  }

  const visualIndex = Math.max(0, Math.min(state.visual, total + 1))

  return {
    total,
    current: state.current,
    visual: visualIndex,
    transition: state.transition,
    extended,
    goNext,
    goPrev,
    goTo,
    onTransitionEnd,
  }
}