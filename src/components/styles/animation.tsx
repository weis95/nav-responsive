export const easeInOut = (direction: string, speed: string) => `
-webkit-transition: ${direction} ${speed} ease-in-out;
-moz-transition: ${direction} ${speed} ease-in-out;
-o-transition: ${direction} ${speed} ease-in-out;
transition: ${direction} ${speed} ease-in-out;
`

export const speed = { fast: '0.3s', slow: '0.5s' }
