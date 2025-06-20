import { Container, Row, Col } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-light py-5">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">Mateus Façanha Lima de Souza</h1>
            <p className="lead mt-4">
              Estudante de Sistemas de Informação com foco em Computação de Alto Desempenho e Ciência de Dados.
            </p>
            <div className="mt-4 d-flex justify-content-center gap-3">
              <a
                href="mailto:facanhalima85@gmail.com"
                className="text-secondary fs-4"
                aria-label="E-mail"
              >
                <i className="bi bi-envelope"></i>
              </a>
              <a
                href="https://linkedin.com/in/mateusfacanha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/Facanhalima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
