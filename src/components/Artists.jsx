import { motion } from 'framer-motion';
import { Music, MapPin, Star, Clock } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Sekouba Bambino',
    role: 'Tête d\'affiche',
    genre: 'Musique Mandingue',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Légende vivante de la musique guinéenne, Sekouba Bambino enchante le monde depuis plus de 30 ans avec sa voix unique et ses mélodies mandingues. Ambassadeur culturel engagé, il met son art au service de la planète.',
    image: '/images/artists/bambino.jpg',
    headliner: true,
  },
  {
    id: 2,
    name: 'Habib Fatako',
    role: 'Artiste invité',
    genre: 'Musique Guinéenne',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Héritier d\'une dynastie musicale guinéenne, Habib Fatako perpétue l\'héritage de son père, le légendaire Sékouba Fatako. Sa musique authentique et son talent inné font de lui l\'un des ambassadeurs incontournables de la culture guinéenne.',
    image: '/images/artists/fatako-affiche.jpg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
  {
    id: 4,
    name: 'Tenin Diawara',
    role: 'Artiste invitée',
    genre: 'Afro-Soul',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Voix puissante de la musique guinéenne, Tenin Diawara envoûte par son talent et son élégance. Artiste engagée, elle porte fièrement les couleurs de la culture guinéenne sur les scènes internationales.',
    image: '/images/artists/tenin-diawara-affiche.jpeg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
  {
    id: 5,
    name: 'Lil Sacko',
    role: 'Artiste invité',
    genre: 'Nouvelle vague guinéenne',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Avec son style audacieux et sa créativité sans limites, Lil Sacko s\'impose comme l\'une des figures emblématiques de la nouvelle vague musicale guinéenne. Un talent brut qui promet de marquer son époque.',
    image: '/images/artists/lil-sacko.jpg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
  {
    id: 6,
    name: 'Yakhouba Sekou',
    role: 'Artiste invité',
    genre: 'Guitare Mandingue',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Virtuose de la guitare guinéenne, Yakhouba Sekou enchante par son jeu mélodique et sa maîtrise exceptionnelle. Gardien des traditions musicales mandingues, il fait vibrer les cordes au rythme de l\'âme africaine.',
    image: '/images/artists/yakhouba-sekou.jpg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
  {
    id: 3,
    name: 'DEGG J Force 3',
    role: 'Artiste invité',
    genre: 'Hip-Hop / Rap',
    country: 'Guinée',
    flag: '🇬🇳',
    description: (
      <>
        Le{' '}
        <span className="text-fce-orange font-bold">28 mai 2026</span>
        , le{' '}
        <span className="text-fce-green font-semibold">Dôme de Paris – Palais des Sports</span>{' '}
        accueillera le{' '}
        <span className="font-bold text-gray-700">Concert Caritatif FestiEnvironnement</span>
        , un événement humanitaire dédié à la protection de l&apos;environnement. Avec{' '}
        <span className="text-fce-green font-semibold">Sékouba Bambino Diabaté</span>{' '}
        et le groupe invité{' '}
        <span className="text-fce-green font-semibold">Degg J Force 3</span>
        , cette grande soirée artistique réunira le public autour d&apos;un message fort :{' '}
        <em className="not-italic text-gray-700">mobiliser la culture au service de la planète</em>
        .{' '}
        <span className="text-fce-orange font-bold">Soyez de la partie.</span>
      </>
    ),
    image: '/images/artists/degg-j-force-affiche.jpg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
  {
    id: 7,
    name: 'Petit KANDIA',
    role: 'Artiste invité',
    genre: 'Musique Traditionnelle',
    country: 'Guinée',
    flag: '🇬🇳',
    description:
      'Héritier d\'une lignée de griots, Petit KANDIA perpétue avec grâce et fierté le patrimoine musical guinéen. Sa voix envoûtante et son sens du rythme profond font de chaque performance un voyage au cœur de l\'âme mandingue.',
    image: '/images/artists/petit-kandia.jpg',
    objectFit: 'contain',
    objectPosition: 'center center',
    photoHeight: '480px',
    headliner: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const HeadlinerCard = ({ artist }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8 md:mb-12"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Photo */}
      <div className="relative h-52 sm:h-64 lg:h-auto lg:min-h-96 bg-fce-green overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div
          className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-fce-green to-fce-lightGreen"
          style={{ display: 'none' }}
        >
          <Music className="w-24 h-24 text-white/40" />
        </div>
        {/* Badge tête d'affiche */}
        <div className="absolute top-4 left-4">
          <span className="bg-fce-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <Star className="w-3 h-3 fill-white" />
            Tête d'affiche
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{artist.flag}</span>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {artist.country}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fce-green font-serif mb-2 leading-tight">
          {artist.name}
        </h3>

        <span className="inline-flex items-center gap-2 text-fce-orange font-semibold text-sm uppercase tracking-wider mb-5">
          <Music className="w-4 h-4" />
          {artist.genre}
        </span>

        <p className="text-gray-600 text-base leading-relaxed mb-8">
          {artist.description}
        </p>

        <a
          href="/billets"
          className="inline-flex items-center justify-center gap-2 bg-fce-orange hover:bg-fce-darkOrange text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 self-start"
        >
          <Star className="w-4 h-4" />
          Réserver ma place
        </a>
      </div>
    </div>
  </motion.div>
);

const GuestCard = ({ artist, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
  >
    {/* Photo */}
    <div className="relative bg-white overflow-hidden" style={{ height: artist.photoHeight || '18rem' }}>
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full transition-transform duration-500 hover:scale-105"
        style={{
          objectFit: artist.objectFit || 'cover',
          objectPosition: artist.objectPosition || 'center top',
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div
        className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-fce-green to-fce-lightGreen"
        style={{ display: 'none' }}
      >
        <Music className="w-16 h-16 text-white/40" />
      </div>
      <div className="absolute top-3 left-3">
        <span className="bg-fce-green text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
          {artist.role}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{artist.flag}</span>
        <span className="text-gray-400 text-xs flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {artist.country}
        </span>
      </div>
      <h3 className="text-xl font-bold text-fce-green font-serif mb-1">{artist.name}</h3>
      <span className="text-fce-orange text-xs font-semibold uppercase tracking-wider flex items-center gap-1 mb-3">
        <Music className="w-3 h-3" />
        {artist.genre}
      </span>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{artist.description}</p>
    </div>
  </motion.div>
);

const SurpriseCard = ({ index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="bg-gradient-to-br from-fce-green to-fce-lightGreen rounded-2xl shadow-xl overflow-hidden border border-fce-green/20 flex flex-col"
  >
    <div className="relative h-56 overflow-hidden flex items-center justify-center">
      {/* Animated bg pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
          <Clock className="w-10 h-10 text-fce-orange" />
        </div>
        <span className="text-white font-bold text-lg tracking-widest uppercase">???</span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <span className="text-fce-orange text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
        <Star className="w-3 h-3" />
        Bientôt révélé
      </span>
      <h3 className="text-xl font-bold text-white font-serif mb-1">Surprise Artist</h3>
      <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">
        Coming Soon
      </span>
      <p className="text-white/70 text-sm leading-relaxed flex-1">
        Un artiste mystère rejoindra le line-up de Festi'Environnement. Restez connectés pour la
        grande révélation !
      </p>
    </div>
  </motion.div>
);

const Artists = () => {
  const headliner = artists.find((a) => a.headliner);
  const guests = artists.filter((a) => !a.headliner);

  return (
    <section id="artistes" className="py-14 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Line-up
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
            Les Artistes
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Des artistes engagés qui unissent leur voix pour la planète et la culture africaine.
          </p>
        </motion.div>

        {/* Headliner */}
        {headliner && <HeadlinerCard artist={headliner} />}

        {/* Guests + Surprise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {guests.map((artist, i) => (
            <GuestCard key={artist.id} artist={artist} index={i} />
          ))}
          <SurpriseCard index={guests.length} />
        </div>
      </div>
    </section>
  );
};

export default Artists;
