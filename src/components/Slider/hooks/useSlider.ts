import { useEffect, useMemo, useReducer, useRef, type TransitionEvent } from "react"
import type { SliderCard } from "../types"

type State = {
  current: number
  visual: number
  transition: boolean
}

type Action =
  | { type: "INIT"; total: number }
  | { type: "ENABLE_TRANSITION" }
  | { type: "NEXT"; total: number }
  | { type: "PREV"; total: number }
  | { type: "GOTO"; index: number; total: number }
  | { type: "WRAP_START"; total: number }
  | { type: "WRAP_END" }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT":
      return action.total <= 1
        ? { current: 0, visual: 0, transition: true }
        : { current: 0, visual: 1, transition: true }

    case "ENABLE_TRANSITION":
      return { ...state, transition: true }

    case "NEXT":
      return {
        ...state,
        transition: true,
        current: (state.current + 1) % action.total,
        visual: state.visual + 1,
      }

    case "PREV":
      return {
        ...state,
        transition: true,
        current: (state.current - 1 + action.total) % action.total,
        visual: state.visual - 1,
      }

    case "GOTO": {
      const target = (action.index + action.total) % action.total
      return {
        ...state,
        transition: true,
        current: target,
        visual: target + 1,
      }
    }
    case "WRAP_START":
      return { ...state, transition: false, visual: action.total }

    case "WRAP_END":
      return { ...state, transition: false, visual: 1 }

    default:
      return state
  }
}

export function useSlider(slides: SliderCard[]) {
  const total = slides.length

  const [state, dispatch] = useReducer(reducer, {
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

    // snap back after visiting ghost slides without breaking the loop
    if (state.visual <= 0) dispatch({ type: "WRAP_START", total })
    else if (state.visual >= total + 1) dispatch({ type: "WRAP_END" })
  }

  // clamp visual in valid range
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
