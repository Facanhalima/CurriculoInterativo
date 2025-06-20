import { Container, Row, Col, Button } from 'react-bootstrap';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Meu Portfólio</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="lead mb-4">
              Este é um site desenvolvido como um projeto existente, utilizando React e Bootstrap.
              Meu objetivo foi aplicar minhas habilidades para criar um design limpo, responsivo e
              de alta usabilidade.
            </p>
            <Button
              href="https://be-the-change-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="d-inline-flex align-items-center"
            >
              Ver Projeto: Be The Change
              <i className="bi bi-github ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
