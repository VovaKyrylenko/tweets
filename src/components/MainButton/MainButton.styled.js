import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledButton = styled(NavLink)`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 10px;
  margin-right: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  width: 50px;

  &:hover {
    background-color: #3e8e41;
    color: white;
  }
`;
