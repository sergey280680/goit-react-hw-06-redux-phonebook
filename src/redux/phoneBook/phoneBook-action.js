import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addName = createAction("phoneBook/addName", (data) => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
const deliteContact = createAction("phoneBook/deliteContact");
const changeFilter = createAction("changeFilter/changeFilter");

export default { addName, deliteContact, changeFilter };
