import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./phoneBook-action";
import types from "./phoneBook-types";

const contacts = createReducer([], {
  [action.addName]: (state, { payLoad }) => [...state, payLoad],
  [action.deliteContact]: (state, { payLoad }) =>
    state.filter((id) => id !== payLoad),
});

// const contacts = (state = [], { type, payLoad }) => {
//   switch (type) {
//     case types.ADD_NAME:
//       return [...state, payLoad];
//     case types.DELITE_CONTACT:
//       return state.filter((contact) => {
//         console.log("contact.id: ", contact.id);
//         console.log("payLoad: ", payLoad);
//         return contact.id !== payLoad;
//       });
//     default:
//       return state;
//   }
// };

const filter = (state = "", { type, payLoad }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payLoad;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
