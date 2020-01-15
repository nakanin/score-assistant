<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <p class="is-size-3">ただ今の時刻は {{ nowTimeLabel }} です。</p>
        <p class="is-size-3">{{ startTimeLabel }} から <span class="is-size-1">{{ elapsedMH }} h</span> 経過しています。</p>
      </div>
    </section>

    <section>
      <div class="container">
        <button class="button is-primary"
            @click="isSetting = true">
            設定
        </button>

        <b-modal :active.sync="isSetting"
            has-modal-card
            @close="updateStartTime">
          <Settings />
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
import { loadStartTime } from './settingService'
import Settings from './Settings.vue'

function getTime(hour, minute) {
  const result = new Date()
  result.setHours(hour)
  result.setMinutes(minute)
  return result.getTime()
}

export default {
  name: 'App',
  components: {
    Settings
  },
  data () {
    return {
      isSetting: false,
      startTime: loadStartTime()
    }
  },
  computed: {
    nowTimeLabel () {
      return new Date().toTimeString().substring(0, 5)
    },
    startTimeLabel () {
      return this.startTime.getHours() + ':' + this.startTime.getMinutes()
    },
    elapsedMH () {
      let now = Date.now()
      if (getTime(12, 45) < now) {
        now = now - 60 * 60 * 1000 // 休憩時間の1時間を引く
      } else if (getTime(11, 45) < now) {
        now = getTime(11, 45)
      }
      const elapsedMinutes = (now - this.startTime.getTime()) / 1000 / 60

      return Math.floor(elapsedMinutes / 15) / 4
    }
  },
  methods: {
    updateStartTime () {
      this.startTime = loadStartTime()
    }
  }
}
</script>

<style>

</style>