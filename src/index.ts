let supportsPassiveEvents: boolean

export default function arePassiveEventsSupported(): boolean {
  if (supportsPassiveEvents !== undefined) {
    return supportsPassiveEvents
  }

  let passive = false

  const options = {
    get passive() {
      return (passive = true)
    },
  }

  const noop = () => {}

  window.addEventListener('t', noop, options)
  window.removeEventListener('t', noop, options as EventListenerOptions)

  supportsPassiveEvents = passive
  return passive
}
