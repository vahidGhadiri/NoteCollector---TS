import styled, {createGlobalStyle} from "styled-components";
import {NavLink} from "react-router-dom";

import {colors} from "../Assets/Colors";


export const Nav = styled("nav")`
  display: flex;
  margin-bottom: 45px;
`

export const TabButton = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 62px;
  text-decoration: none;
  width: 120px;

  &:first-child {
    border-radius: 15px 0 0 15px;
  }

  &:last-child {
    border-radius: 0 15px 15px 0;
  }

  &.active {
    background: ${colors.primary};
    color: #000;
  }
`

export const Layout = styled("div")`
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
`

export const Container = styled("div")`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 1 460px;
  flex-direction: column;
`

export const StyledList = styled("div")`
  background: rgba(255, 255, 255, .10);
  border-radius: 15px;
  width: 100%;
  max-width: 460px;
`