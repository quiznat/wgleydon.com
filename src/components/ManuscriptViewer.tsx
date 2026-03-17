'use client'

import { Fragment } from 'react'
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  }

  // Split poem content into stanzas, each stanza into lines
  const stanzas = currentPoem.content.split('\n\n')

  return (
    <div className="relative">
      {/* Click zones for page turning — full-height edges */}
      <button
        onClick={goToPrev}
        disabled={currentIndex === 0}
        className={`fixed left-0 top-0 bottom-0 w-48 md:w-64 z-20 cursor-pointer group transition-opacity duration-300 ${
          currentIndex === 0 ? 'opacity-0 cursor-default' : 'opacity-0 hover:opacity-100'
        }`}
        aria-label="Previous poem"
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-ink-light/50 group-hover:text-ink/70 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>

      <button
        onClick={goToNext}
        disabled={currentIndex === poems.length - 1}
        className={`fixed right-0 top-0 bottom-0 w-48 md:w-64 z-20 cursor-pointer group transition-opacity duration-300 ${
          currentIndex === poems.length - 1 ? 'opacity-0 cursor-default' : 'opacity-0 hover:opacity-100'
        }`}
        aria-label="Next poem"
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-ink-light/50 group-hover:text-ink/70 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={currentPoem.id}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative"
        >
          {/* Date */}
          <p className="text-xs text-ink-light tracking-[0.25em] uppercase mb-10">
            {currentPoem.date}
          </p>

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl text-ink-dark leading-tight tracking-tight mb-2">
            {currentPoem.title}
          </h3>

          {/* Thin rule */}
          <div className="w-16 h-px bg-accent mb-12" />

          {/* Poem body — <p> per stanza, <br> per line.
              Literary web standard (Ninth Letter, Poetry Foundation).
              Text flows naturally: fits on desktop, wraps gracefully on mobile. */}
          <div className="font-serif text-base md:text-lg text-ink-dark leading-loose">
            {stanzas.map((stanza, si) => (
              <p key={si} className="mb-8 last:mb-0">
                {stanza.split('\n').map((line, li, arr) => (
                  <Fragment key={li}>
                    {line}
                    {li < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            ))}
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-accent/30">
        <div className="flex items-center justify-between">
          {/* Previous */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 text-ink-light hover:text-ink-dark disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-wide hidden sm:inline">Previous</span>
          </button>

          {/* Page counter */}
          <div className="flex items-center gap-3 text-sm text-ink-light">
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
              className="w-12 px-1 py-1 text-center border-b border-accent/40 bg-transparent text-ink-dark focus:outline-none focus:border-ink font-serif text-sm"
            />
            <span className="text-xs tracking-wide">of {poems.length}</span>
          </div>

          {/* Next */}
          <button
            onClick={goToNext}
            disabled={currentIndex === poems.length - 1}
            className="flex items-center gap-2 text-ink-light hover:text-ink-dark disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"
          >
            <span className="text-sm tracking-wide hidden sm:inline">Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
