import { combineReducers } from "redux";

import calendarReducer from "./calendar/calendarReducer";
import contactReducer from "./contact/contactReducer";
import ecommerceReducer from "./ecommerce/ecommerceReducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  contact: contactReducer,
  ecommerce: ecommerceReducer,
});

export default rootReducer;