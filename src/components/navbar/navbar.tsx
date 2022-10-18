import { Nav, NavIcon, NavItem } from "./navbar.style"

const Navbar: React.FC = () => {
    const cart = "/cart.png";
    const busca = "/busca.png";
    const conta = "/conta.png";
    
    return(
        <>
            <Nav>
                <NavItem>WINE</NavItem>
                <NavItem>Clube</NavItem>
                <NavItem>Loja</NavItem>
                <NavItem>Produtores</NavItem>
                <NavItem>Ofertas</NavItem>
                <NavItem>Eventos</NavItem>
                <NavIcon src={busca} />
                <NavIcon src={conta} />
                <NavIcon src={cart} />
            </Nav>
        </>
    )
}

export default Navbar