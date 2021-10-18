import React from "react";
import { connect } from "react-redux";
import { CardContact } from "./CardContact/CardContact";
import PropTypes from "prop-types";
import phoneBookAction from "redux/phoneBook/phoneBook-action";
// import {} from "redux/phoneBook/phoneBook-action";
import { Ul } from "./ListContacts.styled";

const ListContacts = ({ contacts, onDeliteContact }) => {
  // console.log("contacts:", contacts);
  return (
    <Ul>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <CardContact
            key={id}
            name={name}
            id={id}
            number={number}
            onDeliteContact={onDeliteContact}
          />
        ))}
    </Ul>
  );
};

ListContacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

// //   фильтрация контактов не чуствительная к регистру
// const normalizedFilter = this.state.filter.toLowerCase();
// const filteredContacts = this.state.contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );

const mapStateToProps = (state) => {
  // const normalizedFilter = state.filter.toLowerCase();

  // const filteredContacts = state.contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return { contacts: state.phoneBook.contacts };
};

const mapDispatchToProps = (dispatch) => ({
  onDeliteContact: (id) => {
    console.log("id: ", id);
    dispatch(phoneBookAction.deliteContact(id));
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);
