let supportsPassiveEvents

export default function arePassiveEventsSupported() {
  if (supportsPassiveEvents !== undefined) {
    return supportsPassiveEvents
  }

  let passive = false

  const options = Object.defineProperty({}, 'passive', {
    get() {
      passive = true
    },
  })

  const noop = () => {}

  window.addEventListener('t', noop, options)
  window.removeEventListener('t', noop, options)

  supportsPassiveEvents = passive
  return passive
}
