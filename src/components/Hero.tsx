'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#F5F1E8]">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Top corner ornament */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-[#D4C4B0]/40" />
        <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-[#D4C4B0]/40" />
        <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-[#D4C4B0]/40" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-[#D4C4B0]/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-px bg-[#D4C4B0]" />
            <div className="w-3 h-3 rotate-45 border border-[#D4C4B0]" />
            <div className="w-24 h-px bg-[#D4C4B0]" />
          </div>
        </motion.div>
        
        {/* In Loving Memory */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-[#6B5344] text-sm uppercase tracking-[0.3em] mb-6"
        >
          In Loving Memory
        </motion.p>
        
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#2C211C] leading-[0.9] tracking-tight"
        >
          Bill
          <br />
          Leydon
        </motion.h1>
        
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="my-8 flex items-center justify-center"
        >
          <div className="w-32 h-px bg-[#2C211C]" />
        </motion.div>
        
        {/* Dates */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-[#5A4538] text-lg md:text-xl tracking-[0.2em] font-light"
        >
          1945 — 2024
        </motion.p>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 text-[#6B5344] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif italic"
        >
          Husband, Father, Brother, Friend, and Poet
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mt-12"
        >
          <a
            href="#poems"
            className="inline-flex flex-col items-center gap-2 text-[#5A4538] hover:text-[#2C211C] transition-colors duration-300 group"
          >
            <span className="text-sm uppercase tracking-[0.2em]">Enter the Collection</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F1E8] to-transparent pointer-events-none" />
    </section>
  )
}