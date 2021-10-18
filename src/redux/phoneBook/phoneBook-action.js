import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import types from "./phoneBook-types";

const addName = createAction(types.ADD_NAME, (data) => ({
  payLoad: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
const deliteContact = createAction(types.DELITE_CONTACT);
const changeFilter = createAction("changeFilter/changeFilter");

// const addName = (data) => ({
//   type: types.ADD_NAME,
//   payLoad: {
//     id: shortid.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

// const deliteContact = (contactId) => ({
//   type: "phoneBook/deliteContact",
//   payLoad: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payLoad: value,
// });

export default { addName, deliteContact, changeFilter };
