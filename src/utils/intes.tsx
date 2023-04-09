export function isEmpty(value: string | null | undefined) {
  return value === null || value === undefined || value === ''
}

export function debounce(fn: Function, delay = 500) {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
