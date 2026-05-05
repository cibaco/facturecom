import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const videos = [
  {
    id: 1,
    title: "France 24 parle du Festi'Environnement",
    description: (
      <div className="text-sm leading-relaxed">
        Le média international{' '}
        <span className="text-red-600 font-bold">France 24</span>{' '}
        met en lumière le{' '}
        <span className="text-fce-orange font-semibold">Concert Caritatif Festi&apos;Environnement</span>{' '}
        et son{' '}
        <em className="not-italic text-fce-green font-semibold">engagement pour la planète</em>.
      </div>
    ),
    src: '/videos/video-france24-bambino.mp4',
    badge: 'France 24',
    badgeColor: 'bg-red-600',
  },
  {
    id: 2,
    title: "Sékouba Bambino en concert",
    description: (
      <div className="space-y-2 text-sm leading-relaxed">
        <p>
          <span className="text-fce-green font-semibold">Sekouba Bambino Diabaté</span>{' '}
          dévoile{' '}
          <span className="text-fce-orange font-semibold">Festi&apos;Environnement</span>{' '}:
        </p>
        <p className="text-gray-700 italic border-l-2 border-fce-orange pl-3">
          &ldquo;Un concert pour unir nos voix et protéger notre planète.&rdquo;
        </p>
        <p className="pt-1 flex items-center gap-2">
          <span className="text-gray-500">Rendez-vous le</span>{' '}
          <span className="text-fce-orange font-bold">28 mai 2026</span>
          <span className="text-gray-300">•</span>
          <span className="text-fce-green font-semibold">Dôme de Paris</span>
        </p>
      </div>
    ),
    src: '/videos/bambino-presente.mp4',
    badge: 'Concert',
    badgeColor: 'bg-fce-green',
  },
  {
    id: 3,
    title: "Bambino — Aéroport de Conakry",
    description: (
      <div className="space-y-2">
        <p>
          <span className="text-fce-orange font-bold">Mission à Conakry !</span>
        </p>
        <p>
          <span className="text-fce-green font-semibold">Sekouba Bambino Diabaté</span>{' '}
          sensibilise les Guinéens à l&apos;action écologique et les invite à se mobiliser pour{' '}
          <span className="text-fce-orange font-semibold">Festi&apos;Environnement</span>,{' '}
          <em className="not-italic text-gray-600">le concert caritatif qui unit musique et environnement</em>.
        </p>
        <p className="pt-1 flex items-center gap-2">
          <span className="text-fce-orange font-bold">28 Mai 2026</span>
          <span className="text-gray-300">•</span>
          <span className="text-fce-green font-semibold">Dôme de Paris</span>
        </p>
      </div>
    ),
    src: '/videos/bambino-aeroport-conakry.mp4',
    badge: 'Exclusif',
    badgeColor: 'bg-fce-orange',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const VideosPage = () => (
  <>
    <Helmet>
      <title>Vidéos | Festi'Environnement</title>
      <meta
        name="description"
        content="Regardez les vidéos du Concert Caritatif Festi'Environnement — reportages, concerts et coulisses exclusives."
      />
    </Helmet>

    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 sm:pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">

          {/* En-tête */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
              Médias
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
              Nos Vidéos
            </h1>
            <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Reportages, concerts et coulisses exclusives du Concert Caritatif Festi&apos;Environnement.
            </p>
          </motion.div>

          {/* Grille vidéos */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Lecteur */}
                <div className="relative bg-black">
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`${video.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow`}>
                      <Play className="w-3 h-3 fill-white" />
                      {video.badge}
                    </span>
                  </div>
                  <video
                    className="w-full aspect-video"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>

                {/* Texte */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-fce-green font-serif mb-2 leading-snug">
                    {video.title}
                  </h2>
                  <div className="text-gray-500 text-sm leading-relaxed flex-1">
                    {video.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  </>
);

export default VideosPage;
