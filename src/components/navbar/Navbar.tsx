import Link from "next/link";
import { Nav, NavItem, NavItemContainer } from "./Navbar.style";

function Navbar() {
  return (
    <>
      <Nav>
        <Link href={"/"}>
          <NavItem>Wine Commerce</NavItem>
        </Link>
        <NavItemContainer>
          {/* <Link href={"/"}>
            <NavItem>About</NavItem>
          </Link> */}
          {/* <Link href={"/"}>
            <NavItem>Dashboard</NavItem>
          </Link> */}
          <Link href={"/"}>
            <NavItem>Login</NavItem>
          </Link>
        </NavItemContainer>
      </Nav>
    </>
  );
}

export default Navbar;