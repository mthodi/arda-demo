import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE, SET_VIEW, SET_SELECTED_OPTION} 
from "../../constants/ActionTypes";

import { SET_SELECTED_COUNTRY, SET_SELECTED_IXP, SET_SELECTED_REGION } from "../../constants/ActionTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START
  }
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS
  }
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
};

export const showMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  }
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  }
};

export function setView(view) {
  return { type: SET_VIEW, payload: view };
}

export function setSelectedOption(option) {
  return { type: SET_SELECTED_OPTION, payload: option };
}

export function setSelectedIXP(ixp) {
  return { type: SET_SELECTED_IXP, payload: ixp };
}

export function setSelectedCountry(country) {
  return { type: SET_SELECTED_COUNTRY, payload: country };
}

export function setSelectedRegion(region) {
  return { type: SET_SELECTED_REGION, payload: region };
}


