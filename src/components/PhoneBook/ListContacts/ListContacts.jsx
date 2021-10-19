// import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CardContact } from "./CardContact/CardContact";
import phoneBookAction from "redux/phoneBook/phoneBook-action";
import { Ul, Span } from "./ListContacts.styled";

const ListContacts = ({ filter, contacts, onDeliteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const allContacts = filter ? filteredContacts : contacts;

  return (
    <Ul>
      {contacts.length === 0 ? (
        <h3>you have no contacts yet</h3>
      ) : (
        <>
          {filteredContacts.length === 0 ? (
            <h3>
              you do not have contacts with the name <Span>{filter}</Span>
            </h3>
          ) : (
            allContacts.map(({ id, name, number }) => (
              <CardContact
                key={id}
                name={name}
                id={id}
                number={number}
                onDeliteContact={onDeliteContact}
              />
            ))
          )}
        </>
      )}
    </Ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter.toLowerCase(),
});

const mapDispatchToProps = (dispatch) => ({
  onDeliteContact: (id) => {
    dispatch(phoneBookAction.deliteContact(id));
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);
