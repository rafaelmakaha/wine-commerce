import {
  Nav,
  NavIcon,
  NavIconWrapper,
  NavItem,
  NavItemWrapper,
} from "./navbar.style";

const Navbar: React.FC = () => {
  const cart = "/cart.png";
  const busca = "/busca.png";
  const conta = "/conta.png";
  const wine = "/wine.png";

  return (
    <>
      <Nav>
        <NavIcon src={wine} type="logo"></NavIcon>
        <NavItemWrapper>
          <NavItem>Clube</NavItem>
          <NavItem>Loja</NavItem>
          <NavItem>Produtores</NavItem>
          <NavItem>Ofertas</NavItem>
          <NavItem>Eventos</NavItem>
        </NavItemWrapper>
        <NavIconWrapper>
          <NavIcon src={busca} type="icon" />
          <NavIcon src={conta} type="icon" />
          <NavIcon src={cart} type="icon" />
        </NavIconWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
