import React, { memo } from "react";
import { connect } from "react-redux";
import { getItems } from "../../actions";
import { Action } from "../../actions/index";

interface ButtonProps {
  getItems: () => Action;
}

const Button = memo((props: ButtonProps) => (
  <button onClick={props.getItems}>Load Items</button>
));

const mapDispatchToProps = {
  getItems: getItems,
};

export const ButtonContainer = connect(null, mapDispatchToProps)(Button);
