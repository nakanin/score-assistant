const KEY_START_TIME = 'startTime'

export function loadStartTime() {
  const result = new Date()
  const setting = localStorage.getItem(KEY_START_TIME)
  if (setting) {
    const settingDate = new Date(parseInt(setting, 10))
    result.setHours(settingDate.getHours())
    result.setMinutes(settingDate.getMinutes())
  } else {
    result.setHours(8)
    result.setMinutes(30)
  }
  return result
}

export function saveStartTime(startTime) {
  localStorage.setItem(KEY_START_TIME, startTime.getTime())
}
