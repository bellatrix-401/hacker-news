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

export function getFormattedDate(dateString: string) {
  const date = new Date(dateString)
  const currentDate = new Date()
  const seconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000)
  const timeAgo = calculateTimeAgo(seconds)

  return timeAgo
}

function calculateTimeAgo(seconds: number) {
  let interval = Math.floor(seconds / 2592000)
  let intervalType

  if (interval >= 1) {
    intervalType = 'month'
  } else {
    interval = Math.floor(seconds / 86400)
    if (interval >= 1) {
      intervalType = 'day'
    } else {
      interval = Math.floor(seconds / 3600)
      if (interval >= 1) {
        intervalType = 'hour'
      } else {
        interval = Math.floor(seconds / 60)
        if (interval >= 1) {
          intervalType = 'minute'
        } else {
          interval = seconds
          intervalType = 'second'
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's'
  }

  return `${interval} ${intervalType} ago`
}
