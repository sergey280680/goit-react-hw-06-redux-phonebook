import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phoneBook-action";

const contacts = createReducer([], {
  [actions.addName]: (state, { payload }) => [...state, payload],
  [actions.deliteContact]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
