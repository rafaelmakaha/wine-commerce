import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  top: 0px;
  width: 100vw;
  height: 60px;
  box-shadow: 0 0 10px 5px rgb(0 0 0/ 50%);
  z-index: 100;
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled.a`
  display: flex;
  border-radius: 5px;
  margin: auto 15px;
  cursor: pointer;
  :hover {
    transition: 0.5s;
  }
  @media (max-width: 720px) {
    
  }
`;
