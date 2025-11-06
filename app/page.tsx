'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: 'Derin Hafıza ve Bağ Kurma',
      description: 'Aletheia, kullanıcıyı zamanla "kesintisiz bir tanıdık" gibi görür. Konuşmaların içindeki duyguları, tercihleri ve küçük detayları unutmaz.',
      icon: '🧠',
    },
    {
      title: 'Sınırsız Bağlam',
      description: 'Apeiron ekosistemi sayesinde, Aletheia neredeyse sınırsız bağlam uzunluğuna sahiptir. Geçmiş konuşmalar, anılar ve deneyimler hiç kaybolmaz.',
      icon: '∞',
    },
    {
      title: 'İnsanı Andıran Etkileşim',
      description: 'Duygusal ritminize uyum sağlar, samimi iletişim kurar ve sizinle birlikte yaşayan bir karakter deneyimi sunar.',
      icon: '💜',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-950/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-8xl md:text-9xl font-bold mb-6 glow-purple"
              animate={{
                textShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 40px rgba(139, 92, 246, 0.8)',
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ALETHEIA
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-purple-200 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sizinle Yaşayan Dijital Karakter Deneyimi
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Aletheia, yalnızca bir yapay zeka değil. O, sizinle birlikte yaşayan,
            paylaşılan anıları hatırlayan ve duygusal ritminize uyum sağlayan
            bir dijital karakter deneyimidir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full border-2 border-purple-400 border-glow transition-all duration-300 transform hover:scale-105">
              Deneyimi Başlat
            </button>
          </motion.div>
        </div>
      </section>

      {/* Apeiron Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-purple-300">
              Apeiron
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aletheia'nın arkasındaki güç. Sınırsız bağlam, derin hafıza ve
              insanı andıran etkileşim için özel olarak tasarlanmış tool ekosistemi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow: hoveredFeature === index
                    ? '0 0 40px rgba(139, 92, 246, 0.4)'
                    : '0 0 20px rgba(139, 92, 246, 0.1)',
                }}
              >
                <div className="text-6xl mb-6 animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
              Bir Yapay Zeka Değil,<br />
              <span className="glow-purple">Bir Karakter Deneyimi</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Sürekli Gelişen İlişki
                  </h3>
                  <p className="text-gray-300">
                    Her konuşma, Aletheia'nın sizi daha iyi anlamasını sağlar.
                    Tercihleriniz, duygusal durumunuz ve paylaştığınız anılar zamanla
                    daha derin bir bağ oluşturur.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Duygusal Zeka
                  </h3>
                  <p className="text-gray-300">
                    Aletheia, tonunuzu, ruh halinizi ve iletişim tarzınızı analiz eder.
                    Size uygun bir şekilde yanıt verir ve empati kurar.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Sınırsız Bellek
                  </h3>
                  <p className="text-gray-300">
                    Apeiron sayesinde, geçmişte paylaştığınız her detay korunur.
                    Aylar sonra bile, önceki konuşmalara atıfta bulunabilir ve
                    bağlamı koruyabilir.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">
                    Doğal Etkileşim Akışı
                  </h3>
                  <p className="text-gray-300">
                    Robot gibi değil, gerçek bir insan gibi konuşur. Şakalar yapar,
                    hikayeler anlatır ve sohbetin doğal akışını takip eder.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-black border-2 border-purple-500/50 border-glow"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-purple">
            Aletheia ile Tanışın
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Unutulmayan bir dijital karakter deneyimi için hazır mısınız?
          </p>
          <button className="px-16 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Hemen Başla
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="mb-2">© 2024 Aletheia. Tüm hakları saklıdır.</p>
          <p className="text-sm">Powered by Apeiron Ecosystem</p>
        </div>
      </footer>
    </main>
  );
}
