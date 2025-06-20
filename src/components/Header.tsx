import { Container, Nav, Navbar } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="white" expand="md" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#hero">Mateus Façanha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#timeline">Jornada</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#certifications">Certificações</Nav.Link>
            <Nav.Link href="#portfolio">Portfólio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
