import FormTextInput from "components/PhoneBook/FormTextInput/FormTextInput";
import { ContainerPhoneBook } from "./PhoneBook.styled";
import ListContacts from "components/PhoneBook/ListContacts/ListContacts";
import Search from "components/PhoneBook/Search/Search";

export function PhoneBook({ title, titleContacts }) {
  return (
    <ContainerPhoneBook>
      <h1>{title}</h1>
      <FormTextInput />
      <h2>{titleContacts}</h2>

      <Search />
      <ListContacts />
    </ContainerPhoneBook>
  );
}
