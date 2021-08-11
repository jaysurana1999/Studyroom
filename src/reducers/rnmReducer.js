import {ADD_RNM} from '../actions/types';

const initialState = {
  rnmList: [],
};

const rnmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RNM:
      debugger;
      return {
        ...state,
        rnmList: state.rnmList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    default:
      return state;
  }
};

export default rnmReducer;
