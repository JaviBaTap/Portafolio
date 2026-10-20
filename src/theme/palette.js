export const palette = {
  purple: { light: '#c3b3f3', main: '#7c3aed', dark: '#2d1b5f', darkest: '#220138' },
  blue: { light: '#9abce6', main: '#284fa3', dark: '#1e3a8a' },
  red: { light: '#fab2bd', main: '#a21b38', dark: '#4f0218' },
  white: '#ffffff',
  lavender: '#ddf1ff', 
  textDark: '#1f1535',
  textMuted: '#5b5675',
  border: '#000000',
};

// Degradados 
export const gradients = {
  // Fondo de la página de inicio
  hero: `linear-gradient(135deg, ${palette.purple.darkest} 0%, ${palette.purple.main} 50%, ${palette.blue.main} 100%)`,
  
  accent: `linear-gradient(90deg, ${palette.red.main}, ${palette.purple.main}, ${palette.blue.main})`,
  // Portada de proyectos sin imagen
  card: `linear-gradient(135deg, ${palette.purple.main}, ${palette.blue.main})`,
};
