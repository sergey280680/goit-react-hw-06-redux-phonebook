import React from "react";
import { connect } from "react-redux";
import phoneBookAction from "redux/phoneBook/phoneBook-action";
import { Label, SearchWrapper } from "./Search.styled";

const Search = ({ value, onChange, onReset }) => {
  return (
    <SearchWrapper>
      <Label>
        Поиск контакта
        <input type="text" value={value} onChange={onChange} />
      </Label>
      <button onClick={onReset}>x</button>
    </SearchWrapper>
  );
};

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(phoneBookAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
