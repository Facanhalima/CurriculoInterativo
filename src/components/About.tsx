import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">Sobre Mim</h2>
            <p className="lead">
              Estudante de Sistemas de Informação no CEFET/RJ, com sólida base em TI e experiência
              no desenvolvimento de aplicativos comerciais. Possuo proficiência avançada em inglês
              e meu maior foco é em programação. Busco aplicar minha expertise em projetos
              tecnológicos inovadores para impulsionar o avanço da área.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
