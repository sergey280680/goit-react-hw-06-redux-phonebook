import React, { Component } from "react";
// import { useSelector } from "react-redux";
import FormTextInput from "components/PhoneBook/FormTextInput/FormTextInput";
import { ContainerPhoneBook, Span } from "./PhoneBook.styled";
import ListContacts from "components/PhoneBook/ListContacts/ListContacts";
import Search from "components/PhoneBook/Search/Search";
// import shortid from "shortid";
// import contacts from "../../redux/phoneBook/phoneBook-reducer";
// import { getContacts } from "../../redux/phoneBook/phoneBook-selector";

// export function PhoneBook({ title, titleContacts }) {
export class PhoneBook extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // }

  // addName = (data) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   const contacts = this.state.contacts;
  //   for (const name of contacts) {
  //     const names = name.name;

  //     if (names === contact.name) {
  //       return alert(`${contact.name} is already in contacts`);
  //     }
  //   }
  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // deliteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  resetSearch = () => {
    this.setState({ filter: "" });
  };

  render() {
    const { title, titleContacts } = this.props;
    return (
      <ContainerPhoneBook>
        <h1>{title}</h1>
        <FormTextInput />
        <h2>{titleContacts}</h2>

        {/* {contacts.length === 0 ? ( */}
        {/* <h3>you have no contacts yet</h3> */}
        {/* ) : ( */}
        {/* <> */}
        <Search />
        {/* {filteredContacts.length === 0 ? ( */}
        {/* <h3> */}
        {/* you do not have contacts with the name <Span>{filter}</Span> */}
        {/* </h3> */}
        {/* ) : ( */}
        <ListContacts />
        {/* )} */}
        {/* </> */}
        {/* )} */}
      </ContainerPhoneBook>
    );
  }
}

//    default PhoneBook;
