import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE} from '../../constants/ActionTypes'
import {TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, SET_SELECTED_OPTION, SET_VIEW } from "../../constants/ActionTypes";
import { SET_SELECTED_COUNTRY, SET_SELECTED_REGION, SET_SELECTED_IXP } from '../../constants/ActionTypes';


const INIT_STATE = {
  error: "",
  loading: false,
  message: '',
  navCollapsed: true,
  width: window.innerWidth,
  pathname: '/',
  view: '',
  selectedOption: '',
  selectedCountry: 7,
  selectedRegion: 1,
  selectedIXP: 1
};

const CommonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      return {
        ...state,
        pathname: action.payload.location.pathname,
        navCollapsed: false
      }
    }
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case TOGGLE_COLLAPSED_NAV: {
      return {
        ...state,
        navCollapsed: action.navCollapsed
      }
    }
    case FETCH_START: {
      return {...state, error: '', message: '', loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: '', message: '', loading: false};
    }
    case SHOW_MESSAGE: {
      return {...state, error: '', message: action.payload, loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload, message: ''};
    }
    case HIDE_MESSAGE: {
      return {...state, loading: false, error: '', message: ''};
    }
   
    case SET_VIEW:
        return { ...state, view: action.payload};
    case SET_SELECTED_OPTION:
        return { ...state, selectedOption: action.payload};
    case SET_SELECTED_IXP:
        return { ...state, selectedIXP: action.payload};
    case SET_SELECTED_COUNTRY:
        return { ...state, selectedCountry: action.payload};
    case SET_SELECTED_REGION:
        return { ...state, selectedRegion: action.payload};
    default:
      return state;
  }
}

export default CommonReducer;
