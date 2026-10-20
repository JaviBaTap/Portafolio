export const getInitials = (name) => {
  // Si no llega un nombre o no es un texto, retorna un valor por defecto para evitar que la app se rompa
  if (!name || typeof name !== 'string') return 'U';

  return name
    .trim()                      
    .split(/\s+/)                
    .map((w) => w[0])            
    .slice(0, 2)                 
    .join('')                    
    .toUpperCase();              
};