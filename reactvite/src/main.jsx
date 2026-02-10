import React from 'react'
import { createRoot } from 'react-dom/client'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google.com'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
