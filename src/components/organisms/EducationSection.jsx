import { Text } from '@radix-ui/themes';
import Seccion from '../atoms/Section';

const EducationSection = ({ sectionRef }) => (
  <Seccion id="estudios" sectionRef={sectionRef} title="Estudios y Certificaciones" alternate>
    <Text size="3" style={{ fontSize: 16 }}>
      Obtención de titulo de cuarto medio en 2024.
      Actualmente estudiando una carrera en Duocuc, obtención de titululo proximamante en 2027
    </Text>
  </Seccion>
);

export default EducationSection;