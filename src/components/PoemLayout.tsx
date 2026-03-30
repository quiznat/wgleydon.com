'use client'

import { Fragment, useRef, useState, useEffect } from 'react'
import { prepareWithSegments, walkLineRanges } from '@chenglou/pretext'

interface PoemLayoutProps {
  content: string
  className?: string
}

const BASE_SIZE = 20
const MIN_SIZE = 12
const FONT_FAMILY = 'Cormorant Garamond'

function measureMaxLineWidth(content: string, fontSize: number): number {
  const font = `${fontSize}px "${FONT_FAMILY}"`
  const lines = content.split('\n').filter(l => l.trim().length > 0)
  let max = 0
  for (const line of lines) {
    const prepared = prepareWithSegments(line, font)
    walkLineRanges(prepared, 99999, (l) => {
      if (l.width > max) max = l.width
    })
  }
  return max
}

export function PoemLayout({ content, className }: PoemLayoutProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState(BASE_SIZE)
  const [fontsReady, setFontsReady] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.fonts.check(`${BASE_SIZE}px "${FONT_FAMILY}"`)
    }
    return false
  })

  useEffect(() => {
    if (!fontsReady) {
      document.fonts.ready.then(() => setFontsReady(true))
    }
  }, [fontsReady])

  useEffect(() => {
    if (!fontsReady || !ref.current) return

    const maxLineWidth = measureMaxLineWidth(content, BASE_SIZE)

    const resize = () => {
      const containerWidth = ref.current!.clientWidth
      if (containerWidth === 0 || maxLineWidth === 0) return

      if (maxLineWidth <= containerWidth) {
        setFontSize(BASE_SIZE)
      } else {
        const scaled = BASE_SIZE * (containerWidth / maxLineWidth)
        setFontSize(Math.max(MIN_SIZE, Math.round(scaled * 10) / 10))
      }
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [fontsReady, content])

  const stanzas = content.split('\n\n')

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: 2,
          opacity: fontsReady ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
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
    </div>
  )
}
