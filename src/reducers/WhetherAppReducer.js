import { actionTypes } from "./ActionTypes";

export const WhetherAppReducer = (state, action) => {
  
  switch (action.type) {
    case actionTypes.ADD_API_DATA:
      return {
          ...state,
        
          temp: action.payload?.data?.main?.temp,
          humidity: action.payload?.data?.main?.humidity,
          windSpeed: action.payload?.data?.wind?.speed ,
          mainCondition: action.payload.data?.weather?.[0]?.main,
           cityName: action.payload?.city
      };

    default:
      return state;
  }
};
