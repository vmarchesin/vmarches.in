import React from 'react'
import FontAwesome from 'components/FontAwesome'

export const createIcon = (props, key) => (
  <FontAwesome
    key={key || 0}
    {...props}
  />
)

export const wrapAnchor = (href, children, key) =>(
  <a href={href} target='_blank' key={key || 0}>
  {children}
  </a>
)

export const wrapMain = children => <main>{children}</main>