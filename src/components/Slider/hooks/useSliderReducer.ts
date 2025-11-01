import type { SliderState, SliderAction } from '../types/';

export function sliderReducer(
  state: SliderState,
  action: SliderAction
): SliderState {
  switch (action.type) {
    case 'INIT':
      return action.total <= 1
        ? { current: 0, visual: 0, transition: true }
        : { current: 0, visual: 1, transition: true };

    case 'ENABLE_TRANSITION':
      return { ...state, transition: true };

    case 'NEXT':
      return {
        ...state,
        transition: true,
        current: (state.current + 1) % action.total,
        visual: state.visual + 1,
      };

    case 'PREV':
      return {
        ...state,
        transition: true,
        current: (state.current - 1 + action.total) % action.total,
        visual: state.visual - 1,
      };

    case 'GOTO': {
      const target = (action.index + action.total) % action.total;
      return {
        ...state,
        transition: true,
        current: target,
        visual: target + 1,
      };
    }

    case 'WRAP_START':
      return { ...state, transition: false, visual: action.total };

    case 'WRAP_END':
      return { ...state, transition: false, visual: 1 };

    default:
      return state;
  }
}
