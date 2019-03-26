let supportsPassiveEvents: boolean

export default function arePassiveEventsSupported(): boolean {
  if (supportsPassiveEvents !== undefined) {
    return supportsPassiveEvents
  }

  if (typeof window === 'undefined') {
    supportsPassiveEvents = false
    return false
  }

  let passive = false

  const options: AddEventListenerOptions = {
    // @ts-ignore: this is a temporary object, it doesn't have to return anything
    get passive() {
      passive = true
    },
  }

  const noop = () => {}

  window.addEventListener('t', noop, options)
  window.removeEventListener('t', noop, options as EventListenerOptions)

  supportsPassiveEvents = passive
  return passive
}
