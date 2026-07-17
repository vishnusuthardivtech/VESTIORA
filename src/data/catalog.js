// Edit only the arrays and image URLs in this file to refresh the catalogue.
const img = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const site = {
  phone: '+91 9601419809',
  heroImage: img('photo-1604323988786-8d5e7b1d80c6', 1600),
}

export const latestCollection = [
  { name: 'Azure Weave', type: 'WOVEN TEXTURE', image: img('photo-1610030469983-98e550d6193c') },
  { name: 'Moonlit Silk', type: 'SILK STORY', image: img('photo-1610652492500-ded49ceeb378') },
  { name: 'Cobalt Bloom', type: 'PRINTED EDIT', image: img('photo-1601924994987-69e26d50dc26') },
  { name: 'Celestial Thread', type: 'EMBROIDERY', image: img('photo-1566206091558-7f218b696731') },
  { name: 'Blue Hour', type: 'SATIN FINISH', image: img('photo-1583845112203-454c8d6e9d7b') },
  { name: 'Indigo Sari', type: 'HERITAGE WEAVE', image: img('photo-1583391733956-6c78276477e2') },
  { name: 'Atelier Check', type: 'DESIGNER CLOTH', image: img('photo-1523779917675-b6ed3a42a561') },
  { name: 'Ocean Pleat', type: 'LUXURY CREPE', image: img('photo-1558769132-cb1aea458c5e') },
]

export const collections = [
  { name: 'Noor Embroidery', category: 'Embroidery', image: img('photo-1544441893-675973e31985') },
  { name: 'Nightfall Sequins', category: 'Sequins', image: img('photo-1610047402718-3c90d4ccff97') },
  { name: 'Indigo Garden', category: 'Printed', image: img('photo-1596755389378-c31d21fd1273') },
  { name: 'Pearl Brocade', category: 'Woven', image: img('photo-1543076447-215ad9ba6923') },
  { name: 'Sapphire Bloom', category: 'Printed', image: img('photo-1521572163474-6864f9cf17ab') },
  { name: 'Royal Zari', category: 'Embroidery', image: img('photo-1598808503746-f34c53b9323e') },
  { name: 'Midnight Mirror', category: 'Sequins', image: img('photo-1558618666-fcd25c85cd64') },
  { name: 'Monsoon Weave', category: 'Woven', image: img('photo-1548883354-7622d03aca27') },
]

export const journey = [
  { title: 'The search', size: 'tall', image: img('photo-1512436991641-6745cdb1723f', 1200) },
  { title: 'A close look', size: 'wide', image: img('photo-1561052963-61c1c2e7d3e8', 1200), video: 'https://www.youtube.com/watch?v=Scxs7L0vhZ4' },
  { title: 'True colour', size: 'standard', image: img('photo-1618220179428-22790b461013', 1000) },
  { title: 'Made for motion', size: 'standard', image: img('photo-1485968579580-b6d095142e6e', 1000), video: 'https://www.youtube.com/watch?v=Scxs7L0vhZ4' },
  { title: 'The final fold', size: 'wide', image: img('photo-1603252109303-2751441dd157', 1200) },
]
