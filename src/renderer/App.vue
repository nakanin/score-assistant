<template>
  <div id="app">
    <p>ただ今の時刻は {{ nowTime }} です。</p>
    <p>{{ startTime }} から {{ elapsedMH }} h 経過しています。</p>
  </div>
</template>

<script>
const getTime = (hour, minute) => {
  let result = new Date()
  result.setHours(hour)
  result.setMinutes(minute)
  return result.getTime()
}

export default {
  name: 'App',
  data () {
    return {
      startHour: 8,
      startMinute: 30
    }
  },
  computed: {
    nowTime () {
      return new Date().toTimeString()
    },
    startTime () {
      return this.startHour + ':' + this.startMinute
    },
    elapsedMH () {
      let now = Date.now()
      if (getTime(12, 45) < now) {
        now = now - 60 * 60 * 1000 // 休憩時間の1時間を引く
      } else if (getTime(11, 45) < now) {
        now = getTime(11, 45)
      }
      const elapsedMinutes = (now - getTime(this.startHour, this.startMinute)) / 1000 / 60

      return Math.floor(elapsedMinutes / 15) / 4
    }
  }
}
</script>

<style>

</style>