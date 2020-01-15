<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">設定</p>
    </header>
    <section class="modal-card-body">
      <b-field label="始業時刻">
        <b-timepicker v-model="startTime" inline :increment-minutes="15"></b-timepicker>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="close">キャンセル</button>
      <button class="button is-primary" @click="save">保存</button>
    </footer>
  </div>
</template>

<script>
import { loadStartTime, saveStartTime } from './settingService'

export default {
  name: 'Settings',
  data () {
    return {
      startTime: loadStartTime()
    }
  },
  methods: {
    close () {
      this.$parent.close()
    },
    save () {
      saveStartTime(this.startTime)
      this.close()
    }
  }
}
</script>

<style>

</style>