'use client'

import { Fragment } from 'react'

interface PoemLayoutProps {
  content: string
  className?: string
}

export function PoemLayout({ content, className }: PoemLayoutProps) {
  const stanzas = content.split('\n\n')

  return (
    <div className={className}>
      <div className="text-lg leading-[2] text-ink-dark">
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
