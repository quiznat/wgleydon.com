'use client'

import { motion } from 'framer-motion'
import { photos, eras, type Photo } from '@/data/photos'
import Link from 'next/link'

// Deterministic pseudo-random from photo index for consistent rotations
function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function PhotoPrint({ photo, index }: { photo: Photo; index: number }) {
  const rotation = (seededRandom(index) - 0.5) * 5 // -2.5 to +2.5 degrees
  const offsetY = seededRandom(index + 50) * 8 // 0-8px vertical offset

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group"
      style={{
        transform: `rotate(${rotation}deg)`,
        marginTop: `${offsetY}px`,
      }}
    >
      <div className="bg-white p-[10px] pb-[40px] shadow-[2px_3px_12px_rgba(0,0,0,0.12),_0_1px_3px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1 group-hover:shadow-[4px_6px_20px_rgba(0,0,0,0.18)]">
        {/* Photo corner tabs */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-0 h-0 border-[10px] border-transparent border-t-[#D4C4B0]/50 border-l-[#D4C4B0]/50 z-10" />
          <div className="absolute top-0 right-0 w-0 h-0 border-[10px] border-transparent border-t-[#D4C4B0]/50 border-r-[#D4C4B0]/50 z-10" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-[10px] border-transparent border-b-[#D4C4B0]/50 border-l-[#D4C4B0]/50 z-10" />
          <div className="absolute bottom-0 right-0 w-0 h-0 border-[10px] border-transparent border-b-[#D4C4B0]/50 border-r-[#D4C4B0]/50 z-10" />
          <img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            className="w-full h-auto sepia-[0.15] contrast-[1.05] brightness-[0.98]"
          />
        </div>
        {/* Caption area — like handwriting below a print */}
        <p className="mt-3 text-center font-serif text-sm italic text-ink-light/80 leading-tight px-1">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  )
}

function EraSection({ eraId }: { eraId: number }) {
  const era = eras.find(e => e.id === eraId)!
  const eraPhotos = photos.filter(p => p.era === eraId)

  if (eraPhotos.length === 0) return null

  return (
    <section className="mb-24">
      {/* Era divider — like a chapter page in a photo album */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 py-12"
      >
        <p className="text-accent-dark text-xs uppercase tracking-[0.35em] mb-4">
          {era.years}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink-dark mb-3">
          {era.title}
        </h2>
        <p className="font-serif text-lg italic text-ink-light">
          {era.subtitle}
        </p>
        <div className="mt-6 mx-auto w-24 h-px bg-accent" />
      </motion.div>

      {/* Photo grid — staggered, organic layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
        {eraPhotos.map((photo, i) => (
          <PhotoPrint
            key={photo.src}
            photo={photo}
            index={eraId * 100 + i}
          />
        ))}
      </div>
    </section>
  )
}

export default function FamilyAlbum() {
  return (
    <main className="min-h-screen" style={{
      background: `
        linear-gradient(180deg, #EDE5D8 0%, #E8DFD0 50%, #E2D9C8 100%)
      `,
    }}>
      {/* Subtle texture overlay — old paper */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />


      {/* Album cover */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Decorative flourish */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-accent-dark/40" />
            <span className="text-accent-dark text-lg">&#10045;</span>
            <div className="w-16 h-px bg-accent-dark/40" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-ink-dark leading-[0.95] mb-6">
            Family
            <br />
            Album
          </h1>

          <p className="font-serif text-xl italic text-ink-light mb-4">
            The Leydon Family
          </p>
          <p className="text-sm text-accent-dark uppercase tracking-[0.25em]">
            1948 &mdash; 2024
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-accent-dark/40" />
            <span className="text-accent-dark text-lg">&#10045;</span>
            <div className="w-16 h-px bg-accent-dark/40" />
          </div>
        </motion.div>
      </div>

      {/* Photo album pages */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pb-32">
        {eras.map(era => (
          <EraSection key={era.id} eraId={era.id} />
        ))}

        {/* Closing page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-accent-dark/40" />
            <span className="text-accent-dark text-lg">&#10045;</span>
            <div className="w-16 h-px bg-accent-dark/40" />
          </div>
          <p className="font-serif text-2xl italic text-ink-light mb-8">
            In loving memory
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-accent-dark uppercase tracking-[0.2em] hover:text-ink transition-colors duration-300 border-b border-accent-dark/30 pb-1"
          >
            Back to Poems
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
