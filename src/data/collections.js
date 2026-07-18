// Change only these image paths and labels to update every kurta-fabric collection.
// Each category automatically receives its own detail page and lightbox gallery.
const image = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`

const base = import.meta.env.BASE_URL

export const collections = [
  // { id: 'digital-print', name: 'Digital Print', fabricType: 'Premium Kurta Fabric', cover: `${base}images/home/digital_print.jpg`, images: [`${base}images/home/digital_print.jpg`, `${base}images/home/digital_print.jpg`, `${base}images/home/digital_print.jpg`] },
  { id: 'embroidery', name: 'Embroidery', fabricType: 'Embroidered Kurta Fabric', cover: `${base}images/home/emboraidry_work.jpg`, images: [`${base}images/home/emboraidry_work.jpg`, `${base}images/home/emboraidry_work.jpg`, `${base}images/home/emboraidry_work.jpg`] },
  { id: 'cotton', name: 'Cotton', fabricType: 'Premium Cotton Kurta Fabric', cover: `${base}images/home/cotton.webp`, images: [`${base}images/home/cotton.webp`, `${base}images/home/cotton.webp`, `${base}images/home/cotton.webp`] },
  { id: 'rayon', name: 'Rayon', fabricType: 'Rayon Kurta Fabric', cover: `${base}images/home/rayon.webp`, images: [`${base}images/home/rayon.webp`, `${base}images/home/rayon.webp`, `${base}images/home/rayon.webp`] },

  // { id: 'viscose', name: 'Viscose', fabricType: 'Viscose Kurta Fabric', cover: image('photo-1610047402718-3c90d4ccff97'), images: [image('photo-1610047402718-3c90d4ccff97'), image('photo-1604323988786-8d5e7b1d80c6'), image('photo-1618220179428-22790b461013')] },
  // { id: 'linen', name: 'Linen', fabricType: 'Linen Kurta Fabric', cover: image('photo-1543076447-215ad9ba6923'), images: [image('photo-1543076447-215ad9ba6923'), image('photo-1548883354-7622d03aca27'), image('photo-1583391733956-6c78276477e2')] },
  // { id: 'jacquard', name: 'Jacquard', fabricType: 'Jacquard Kurta Fabric', cover: image('photo-1609004320007-0a2c395e7d37'), images: [image('photo-1609004320007-0a2c395e7d37'), image('photo-1558618666-fcd25c85cd64'), image('photo-1601924994987-69e26d50dc26')] },
]
