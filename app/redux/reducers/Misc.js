import * as types from '../types';

const initialState = {
  selectedGC: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SELECTED_GC:
      return {
        ...state,
        selectedGC: payload
      };
      case types.SHOW_SPINNER:
      return {
         ...state,
        showSpinner: true
      }
    case types.HIDE_SPINNER:
      return {
         ...state,
        showSpinner: false
      }
    default:
      return state;
  }
};
