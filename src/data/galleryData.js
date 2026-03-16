// Données de la galerie
// Les catégories sont attribuées par groupe de photos - à ajuster selon le contenu réel

export const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'concerts', label: 'Concerts' },
  { id: 'galas', label: 'Galas & Soirées' },
  { id: 'conferences', label: 'Conférences' },
  { id: 'corporate', label: 'Corporate' },
];

const events = [
  {
    title: 'Concert Sékouba Bambino',
    category: 'concerts',
    date: '2026-02-21',
    files: [
      'IMG-20260221-WA0019.jpg',
      'IMG-20260221-WA0022.jpg',
    ],
  },
  {
    title: 'Concert FCE Mars 2026',
    category: 'concerts',
    date: '2026-03-16',
    files: [
      'IMG-20260316-WA0006.jpg',
      'IMG-20260316-WA0013.jpg',
      'IMG-20260316-WA0014.jpg',
      'IMG-20260316-WA0015.jpg',
      'IMG-20260316-WA0017.jpg',
      'IMG-20260316-WA0018.jpg',
      'IMG-20260316-WA0019.jpg',
      'IMG-20260316-WA0020.jpg',
      'IMG-20260316-WA0021.jpg',
      'IMG-20260316-WA0022.jpg',
      'IMG-20260316-WA0023.jpg',
      'IMG-20260316-WA0024.jpg',
      'IMG-20260316-WA0025.jpg',
      'IMG-20260316-WA0026.jpg',
      'IMG-20260316-WA0027.jpg',
    ],
  },
  {
    title: 'Gala de Prestige FCE 2026',
    category: 'galas',
    date: '2026-03-16',
    files: [
      'IMG-20260316-WA0028.jpg',
      'IMG-20260316-WA0029.jpg',
      'IMG-20260316-WA0030.jpg',
      'IMG-20260316-WA0031.jpg',
      'IMG-20260316-WA0032.jpg',
      'IMG-20260316-WA0033.jpg',
      'IMG-20260316-WA0034.jpg',
      'IMG-20260316-WA0035.jpg',
      'IMG-20260316-WA0036.jpg',
      'IMG-20260316-WA0037.jpg',
      'IMG-20260316-WA0038.jpg',
      'IMG-20260316-WA0039.jpg',
      'IMG-20260316-WA0040.jpg',
      'IMG-20260316-WA0041.jpg',
      'IMG-20260316-WA0042.jpg',
    ],
  },
  {
    title: 'Conférence FCE Mars 2026',
    category: 'conferences',
    date: '2026-03-16',
    files: [
      'IMG-20260316-WA0043.jpg',
      'IMG-20260316-WA0044.jpg',
      'IMG-20260316-WA0045.jpg',
      'IMG-20260316-WA0046.jpg',
      'IMG-20260316-WA0047.jpg',
      'IMG-20260316-WA0048.jpg',
      'IMG-20260316-WA0049.jpg',
      'IMG-20260316-WA0050.jpg',
      'IMG-20260316-WA0051.jpg',
      'IMG-20260316-WA0052.jpg',
      'IMG-20260316-WA0053.jpg',
      'IMG-20260316-WA0054.jpg',
      'IMG-20260316-WA0055.jpg',
    ],
  },
  {
    title: 'Événement Corporate FCE 2026',
    category: 'corporate',
    date: '2026-03-16',
    files: [
      'IMG-20260316-WA0056.jpg',
      'IMG-20260316-WA0057.jpg',
      'IMG-20260316-WA0058.jpg',
      'IMG-20260316-WA0059.jpg',
      'IMG-20260316-WA0060.jpg',
      'IMG-20260316-WA0061.jpg',
      'IMG-20260316-WA0062.jpg',
      'IMG-20260316-WA0063.jpg',
      'IMG-20260316-WA0064.jpg',
      'IMG-20260316-WA0065.jpg',
      'IMG-20260316-WA0066.jpg',
      'IMG-20260316-WA0068.jpg',
      'IMG-20260316-WA0069.jpg',
      'IMG-20260316-WA0070.jpg',
      'IMG-20260316-WA0071.jpg',
      'IMG-20260316-WA0072.jpg',
      'IMG-20260316-WA0073.jpg',
    ],
  },
];

let idCounter = 1;
export const galleryImages = events.flatMap((event) =>
  event.files.map((file) => ({
    id: idCounter++,
    src: `/images/galerie/${file}`,
    title: event.title,
    category: event.category,
    date: event.date,
  }))
);
