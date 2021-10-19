import React, { useState } from "react";
import { connect } from "react-redux";
import phoneBookAction from "redux/phoneBook/phoneBook-action.js";
import { Form, Label } from "./FormTextInput.styled";

export function FormTextInput({ stateContacts, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  console.log("stateContacts: ", stateContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const el of stateContacts) {
      const names = el.name;
      if (names === name) {
        return alert(`${name} is already in contacts`);
      }
    }

    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span> Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <button type="submit">Add contact</button>{" "}
    </Form>
  );
}

const mapStateToProps = (x) => ({
  stateContacts: x.phoneBook.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => {
    return dispatch(phoneBookAction.addName(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTextInput);
