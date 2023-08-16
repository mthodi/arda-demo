import { SET_VIEW, SET_SELECTED_OPTION } from "../../constants/ActionTypes";
import { combineReducers } from "redux";


const initialState = {};

const viewReducer = (state = 'IXP', action) => {
    switch (action.type) {
      case SET_VIEW:
        return { ...state, view: action.payload};
      default:
        return state;
    }
  };
  
  const selectedOptionReducer = (state = '', action) => {
    switch (action.type) {
      case SET_SELECTED_OPTION:
        return { ...state, selectedOption: action.payload };
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    view: viewReducer,
    selectedOption: selectedOptionReducer,
  });
  
export default rootReducer;
  