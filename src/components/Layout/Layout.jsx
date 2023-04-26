import React from "react";
import { Outlet } from 'react-router-dom'
import { AppBar, NavItem, NavLinkStyled, NavLinks } from "./Layout.styled";

export const Layout = () => {
    return (
      <><AppBar>
        <NavLinks>
          <NavItem>
            <NavLinkStyled exact to="/">
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
          </NavItem>
        </NavLinks>
      </AppBar><Outlet /></>
    );
};
