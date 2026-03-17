'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Poem } from '@/data/poems'

interface PoemCardProps {
  poem: Poem
  index: number
  className?: string
}

export function PoemCard({ poem, index, className = '' }: PoemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const staggerDelay = index * 0.1
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: staggerDelay,
        ease: [0.32, 0.72, 0, 1] 
      }}
      className={className}
    >
      {/* Double-bezel card architecture */}
      <div className="h-full p-2 bg-cream-100/50 rounded-[2rem] ring-1 ring-espresso-800/5 hover:ring-espresso-800/10 transition-all duration-500">
        <div className="h-full bg-cream-50 rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_20px_-10px_rgba(0,0,0,0.05)] p-6 md:p-8 flex flex-col">
          {/* Date */}
          <time className="text-xs uppercase tracking-[0.15em] text-espresso-400 font-medium mb-4">
            {new Date(poem.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          
          {/* Title */}
          <h3 className="font-serif text-2xl md:text-3xl text-espresso-800 leading-tight mb-4">
            {poem.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-espresso-600 leading-relaxed flex-grow">
            {poem.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {poem.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-sage-300/20 text-espresso-500 capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Read more button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 self-start inline-flex items-center gap-2 text-sm font-medium text-espresso-700 hover:text-espresso-900 transition-colors duration-300"
          >
            <span>{isExpanded ? 'Show less' : 'Read poem'}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Expanded content */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="mt-6 pt-6 border-t border-espresso-200/50"
            >
              <div className="prose prose-espresso">
                <p className="text-espresso-700 leading-relaxed whitespace-pre-line font-serif text-lg">
                  {poem.content}
                </p>
              </div>
              <p className="mt-6 text-espresso-400 text-sm italic">
                — Bill
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  )
}