const KEY_START_TIME = 'startTime'

export function loadStartTime() {
  const setting = localStorage.getItem(KEY_START_TIME)
  if (setting) {
    return new Date(parseInt(setting, 10))
  }
  const result = new Date()
  result.setHours(8)
  result.setMinutes(30)
  return result
}

export function saveStartTime(startTime) {
  localStorage.setItem(KEY_START_TIME, startTime.getTime())
}
