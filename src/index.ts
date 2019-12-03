import isBrowser from './isBrowser.macro'

let supportsPassiveEvents: boolean

export default function arePassiveEventsSupported(): boolean {
  if (supportsPassiveEvents !== undefined) {
    return supportsPassiveEvents
  }

  if (!isBrowser) {
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

  "undefined" != typeof window && window.addEventListener('t', noop, options)
  "undefined" != typeof window && window.removeEventListener('t', noop, options as EventListenerOptions)

  supportsPassiveEvents = passive
  return passive
}
