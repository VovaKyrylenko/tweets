import React from "react";
import { ActiveButton, DisabledButton } from "./Button.styled";

const Button = ({ isActive, onClick, isLoading }) => {
  if (isActive) {
    return (
      <ActiveButton onClick={onClick}>
        {" "}
        {isLoading ? "..." : "Follow"}{" "}
      </ActiveButton>
    );
  }
  return (
    <DisabledButton onClick={onClick}>
      {isLoading ? "..." : "Following"}
    </DisabledButton>
  );
};

export default Button;
