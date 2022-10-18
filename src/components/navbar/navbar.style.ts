import { StaticImageData } from "next/image";
import styled from "styled-components";
import colors from "../../../public/colors.json";

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  background-color: ${colors.neutrals.white};
  padding: 15px 150px;
`;

export const NavItem = styled.a`
  background-color: transparent;
  font-family: "Roboto Flex", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const NavItemWrapper = styled.div`

`

export const NavIcon = styled.img`
    object-fit: contain;
    background-color: transparent;
    height: 56px;
    width: 56px;
`

export const NavIconWrapper = styled.div`


`