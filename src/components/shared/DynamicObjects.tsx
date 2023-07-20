import CircleCheckmark from 'icons/CircleCheckmark'
import React from 'react'

export const Links = [
  {
    title: 'Hello',
    link: 'https://www.google.com/',
    target: true,
    icon: <CircleCheckmark />,
    subLinks: [{ title: 'Hello', link: 'hello' }]
  },

  {
    title: 'Bye',
    link: 'bye',
    target: false,
    icon: <CircleCheckmark />,
    subLinks: [
      { title: 'Howdy', link: 'howdy' },
      { title: 'Hej', link: 'hej' },
      { title: 'Konichiwa', link: 'konichiwa' }
    ]
  },
  {
    title: 'Greetings',
    link: 'greetings',
    target: false,
    icon: <CircleCheckmark />,
    subLinks: [{ title: 'Hi', link: 'hi' }]
  },
  {
    title: 'Hey',
    link: 'hey',
    target: false,
    icon: <CircleCheckmark />
  },
  {
    title: 'Yo',
    link: 'yo',
    target: false,
    icon: <CircleCheckmark />
  }
]
