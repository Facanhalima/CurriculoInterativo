import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p className="mb-1">&copy; 2025 Mateus Façanha Lima de Souza</p>
        <p className="text-muted small mb-0">
          Currículo Interativo desenvolvido com React, TypeScript e Bootstrap.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
