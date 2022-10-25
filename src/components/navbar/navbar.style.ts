import { StaticImageData } from "next/image";
import styled from "styled-components";
import colors from "../../../public/colors.json";

interface Props {
  type: string;
}

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  background-color: ${colors.neutrals.white};
  padding: 15px 150px;
`;

export const NavItem = styled.a`
  background-color: transparent;
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;

export const NavItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const NavIcon = styled.img<Props>`
  object-fit: contain;
  cursor: pointer;
  ${(props) => {
    if (props.type === "icon") {
      return `
        height: 56px;
        width: 56px;
        `;
    } else {
      return `
        height: 28px;
        width: 100px;
        `;
    }
  }}
`;

export const NavIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px;
`;
