'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { Poem } from '@/data/poems'

interface ManuscriptViewerProps {
  poems: Poem[]
}

export function ManuscriptViewer({ poems }: ManuscriptViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  
  const currentPoem = poems[currentIndex]
  
  const goToNext = useCallback(() => {
    if (currentIndex < poems.length - 1) {
      setDirection(1)
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex, poems.length])
  
  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex])
  
  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }
  
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      rotateY: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      rotateY: direction < 0 ? 20 : -20,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  }
  
  return (
    <div className="relative">
      {/* The Book/Page */}
      <div className="relative" style={{ perspective: '1500px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={currentPoem.id}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative bg-white min-h-[600px] md:min-h-[700px] shadow-[0_8px_60px_-15px_rgba(0,0,0,0.2)]"
            style={{
              background: 'linear-gradient(to right, #F8F8F8 0%, #FFFFFF 3%, #FFFFFF 97%, #F0F0F0 100%)',
            }}
          >
            {/* Left edge shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
            
            {/* Right edge highlight */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
            
            {/* Click zones for page turning */}
            {/* Left edge - go to previous */}
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-0 bottom-0 w-24 md:w-32 z-20 cursor-pointer group transition-opacity duration-300 ${
                currentIndex === 0 ? 'opacity-0 cursor-default' : 'opacity-0 hover:opacity-100'
              }`}
              aria-label="Previous page"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-ink-light/50 group-hover:text-ink/70 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            
            {/* Right edge - go to next */}
            <button
              onClick={goToNext}
              disabled={currentIndex === poems.length - 1}
              className={`absolute right-0 top-0 bottom-0 w-24 md:w-32 z-20 cursor-pointer group transition-opacity duration-300 ${
                currentIndex === poems.length - 1 ? 'opacity-0 cursor-default' : 'opacity-0 hover:opacity-100'
              }`}
              aria-label="Next page"
            >
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-ink-light/50 group-hover:text-ink/70 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            
            {/* Page content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-2xl mx-auto">
                {/* Date */}
                <p className="text-left text-sm text-ink-light tracking-[0.2em] uppercase mb-8">
                  {currentPoem.date}
                </p>
                
                {/* Title */}
                <header className="mb-12">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-dark leading-tight tracking-tight">
                    {currentPoem.title}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-accent" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-accent" />
                    <div className="w-12 h-px bg-accent" />
                  </div>
                </header>
                
                {/* Poem body */}
                <div className="font-serif text-lg md:text-xl text-ink-dark leading-[2.2] whitespace-pre-line text-left">
                  {currentPoem.content}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
      
      {/* Bottom navigation */}
      <div className="mt-8 flex items-center justify-between">
        {/* Previous button */}
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 text-ink-light hover:text-ink-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm tracking-wide">Previous</span>
        </button>
        
        {/* Page dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {poems.slice(0, Math.min(poems.length, 12)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-ink w-6' 
                  : 'bg-accent w-1.5 hover:bg-accent-dark'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
          {poems.length > 12 && (
            <span className="text-xs text-accent-dark ml-2">+{poems.length - 12}</span>
          )}
        </div>
        
        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={currentIndex === poems.length - 1}
          className="flex items-center gap-2 text-ink-light hover:text-ink-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
        >
          <span className="text-sm tracking-wide">Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Jump to page */}
      <div className="mt-6 flex items-center justify-center gap-3 text-sm">
        <span className="text-ink-light">Go to page</span>
        <input
          type="number"
          min={1}
          max={poems.length}
          value={currentIndex + 1}
          onChange={(e) => {
            const page = parseInt(e.target.value) - 1
            if (page >= 0 && page < poems.length) {
              goToIndex(page)
            }
          }}
          className="w-14 px-2 py-1.5 text-center rounded border border-accent/50 bg-white text-ink-dark focus:outline-none focus:border-accent font-serif"
        />
        <span className="text-ink-light">of {poems.length}</span>
      </div>
      
      {/* Hint text */}
      <p className="mt-4 text-center text-xs text-ink-light/60 italic">
        Click the edges of the page to turn
      </p>
    </div>
  )
}