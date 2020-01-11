import { createReducer } from "@reduxjs/toolkit";
import {
  error,
  reset,
  save,
  toggleFetching,
} from "./actions";

export const weatherSlice = {
  updated: Date.now(),
  fetching: false,
  open: true,
  data: null,
  errors: [],    
};

const weather = createReducer(weatherSlice, {

  [error]: (state, action) => {
    console.log('error', action.error);
    state.updated = Date.now();
    state.errors.push(action.error);
    return state;
  }, 

  [save]: (state, action) => {
    console.log('save', action.data);
    state.updated = Date.now();
    state.data = action.data;
    return state;
  }, 

  [toggleFetching]: (state, action) => {
    console.log('fetching', action.bool);
    state.updated = Date.now();
    state.fetching = action.bool;
    return state;
  }, 
  
  [reset]: () => {
    return weatherSlice;
  }, 

});

export { weather };

/*
  [openWeather]: (state) => {
    state.weather.updated = Date.now();
    state.weather.open = true;
    return state;
  },

  [closeWeather]: (state) => {
    state.weather.updated = Date.now();
    state.weather.open = false;
    return state;
  },

  [updateWeather]: (state) => {
    state.weather.updated = Date.now();
    return state;
  },
*/