import { gradients } from './palette';

export const buildHeroBackground = ({ type, image, overlay = 0.45 } = {}) => {
  if (type === 'image' && image) {
    return `linear-gradient(rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay})), url(${image})`;
  }
  return gradients.hero;
};
