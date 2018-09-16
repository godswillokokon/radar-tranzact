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
    default:
      return state;
  }
};
