import React from 'react'

export const wrapAnchor = (href, children, key) =>(
  <a href={href} target='_blank' key={key || 0}>
  {children}
  </a>
)

export const wrapMain = children => <main>{children}</main>