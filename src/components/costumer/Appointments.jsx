import React from 'react';
import { Button, Container, Header, Icon, Image } from 'semantic-ui-react';


const Appointments = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <Header as="h1" inverted>
          Bienvenidos a Nails Studio
          <Header.Subheader>Los mejores servicios de uñas en la ciudad</Header.Subheader>
        </Header>
        <Button color="pink" size="huge">
          Agenda tu cita ahora
          <Icon name="angle right" />
        </Button>
      </div>
      <Container textAlign="center" className="about-container">
        <Header as="h2" inverted>
          Sobre nosotros
        </Header>
        <p>
          En Nails Studio, nuestro objetivo es proporcionar a nuestros clientes los mejores servicios de uñas en la
          ciudad. Nos esforzamos por crear una experiencia relajante y de calidad para cada uno de nuestros clientes.
        </p>
        <Image src="/images/about.jpg" size="medium" circular />
      </Container>
      <div className="footer-container">
        <p>2023 &copy; Nails Studio. Todos los derechos reservados.</p>
        <svg width="100" height="100">
  <rect x="5" y="5" width="90" height="45" fill="#f5deb3" stroke="#a0522d" stroke-width="2" rx="10" />
  <rect x="10" y="15" width="80" height="30" fill="#ffffff" stroke="#a0522d" stroke-width="2" rx="8" />
  <circle cx="25" cy="40" r="10" fill="#ffe4c4" stroke="#a0522d" stroke-width="2" />
  <circle cx="65" cy="40" r="10" fill="#ffe4c4" stroke="#a0522d" stroke-width="2" />
  <path d="M 30 50 Q 50 60 70 50" fill="none" stroke="#a0522d" stroke-width="4" />
</svg>

      </div>
    </div>
  );
};

export default Appointments;
