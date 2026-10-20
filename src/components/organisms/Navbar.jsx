import { Flex, Button, Container } from '@radix-ui/themes';

const Navbar = ({ onNavigate }) => {
  return (
    <header style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 10,
      padding: '16px 0' 
    }}>
      <Container size="4">
        <Flex justify="center" gap="3" wrap="wrap">
          <Button 
            variant="ghost" 
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => onNavigate('inicio')}
          >
            Inicio
          </Button>
          
          <Button 
            variant="ghost" 
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => onNavigate('experiencia')}
          >
            Experiencia Laboral
          </Button>

          <Button 
            variant="ghost" 
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => onNavigate('estudios')}
          >
            Estudios
          </Button>

          <Button 
            variant="ghost" 
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => onNavigate('proyectos')}
          >
            Desarrollos y Proyectos
          </Button>

          <Button 
            variant="ghost" 
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => onNavigate('contacto')}
          >
            Contacto
          </Button>
        </Flex>
      </Container>
    </header>
  );
};

export default Navbar;