'use client'

import { motion } from 'framer-motion'
import { poems } from '@/data/poems'
import { ManuscriptViewer } from '@/components/ManuscriptViewer'

export default function Home() {
  return (
    <main className="min-h-screen bg-paper-100">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative corner ornaments */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 w-32 h-32 border-l border-t border-accent/40" />
          <div className="absolute top-8 right-8 w-32 h-32 border-r border-t border-accent/40" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border-l border-b border-accent/40" />
          <div className="absolute bottom-8 right-8 w-32 h-32 border-r border-b border-accent/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-ink-light text-sm uppercase tracking-[0.3em] mb-6"
          >
            In Loving Memory
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-7xl md:text-8xl lg:text-9xl text-ink-dark leading-[0.9] tracking-tight"
          >
            Bill
            <br />
            Leydon
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="my-8 flex items-center justify-center"
          >
            <div className="w-32 h-px bg-ink-dark" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-ink text-lg tracking-[0.2em] font-light"
          >
            1945 — 2024
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-ink-light text-lg max-w-2xl mx-auto leading-relaxed font-serif italic"
          >
            Husband, Father, Grandfather, Brother, Librarian, and Poet
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#manuscript"
              className="inline-flex flex-col items-center gap-2 text-ink hover:text-ink-dark transition-colors group"
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
      </section>
      
      {/* Manuscript Section */}
      <section id="manuscript" className="py-24 md:py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ManuscriptViewer poems={poems} />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 md:py-32 px-4 bg-paper-200 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-ink text-xs uppercase tracking-[0.25em] font-medium mb-6">
              About the Poet
            </span>
            <h2 className="font-serif text-5xl text-ink-dark leading-tight tracking-tight">
              William "Bill" Leydon
            </h2>
          </motion.div>
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 flex justify-center"
          >
            <div className="p-2 bg-white shadow-lg">
              <img 
                src="/bill-leydon.jpg" 
                alt="Bill Leydon"
                className="w-64 h-64 md:w-80 md:h-80 object-cover grayscale"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="prose prose-lg mx-auto text-ink leading-[1.9]"
          >
            <p className="text-center font-serif italic text-xl text-ink-light mb-8">
              November 24, 1945 — August 25, 2024
            </p>
            
            <p>
              Bill passed away peacefully at his home in Dorchester, surrounded by his family. 
              He will be sorely missed by all who were fortunate enough to know and love him.
            </p>
            
            <p>
              Bill is survived by his devoted wife of over 50 years, Maureen (Sweeney) Leydon; 
              his son Michael, of whom he was so very proud; his daughter-in-law LeeMarie Kennedy, whom he cherished; 
              and his two grandsons Jack and Charlie, who absolutely lit up his life. 
              He was predeceased by his stillborn sons Kevin and Liam.
            </p>
            
            <p>
              Born in Somerville, Massachusetts, Bill became a proud longtime resident of Dorchester upon his marriage. 
              He was the son of the late John and Rose (Shepard) Leydon, and loving brother of Fran, Jack, Bob, Therese, 
              the late Mary, and Eddie. He was also a beloved uncle to many nieces and nephews.
            </p>
            
            <p>
              Bill graduated from the University of Massachusetts and Simmons College with a degree in Library Science. 
              He worked as a librarian at the Boston Police Academy, the Library at Logan International Airport, 
              AVCO Everett Research Labs, and as the Assistant Director of the Hingham Public Library. 
              He was also a sales representative for the New England Mobile Book Fair.
            </p>
            
            <p>
              Bill was a talented poet whose work was published in several anthologies, as well as his own collections. 
              He was quietly pleased to be offered a fellowship to the prestigious MacDowell Artist Colony. 
              He celebrated or despaired depending on the Boston Red Sox standings, was an avid movie buff, 
              and enjoyed travel until his health declined. In later years, Wheel of Fortune and Jeopardy were a nightly ritual 
              where Bill celebrated the participants' wins like they were his own. Bill loved people, dogs, and birds, 
              and they were all better for his kind attention.
            </p>
            
            <blockquote className="border-l-2 border-accent pl-6 my-8 font-serif italic text-ink-light">
              "We celebrate those who have gone before, making smooth our paths. 
              We are in sorrow for their passing, but know we will see them shortly; we will triumph over death and be happy once again."
            </blockquote>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-ink-dark text-paper-100 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-xl">William "Bill" Leydon</p>
          <p className="text-accent text-sm mt-2">
            1945 — 2024
          </p>
          <p className="text-paper-200/60 text-xs mt-4 max-w-lg mx-auto">
            In lieu of flowers, donations may be made to Doctors Without Borders, 
            Smile Train, the Pine Street Inn, or Cops For Kids With Cancer.
          </p>
        </div>
      </footer>
    </main>
  )
}