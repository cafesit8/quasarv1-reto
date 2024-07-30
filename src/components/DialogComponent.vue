<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card>
      <q-card-section class="flex column">
        <picture style="display: block;">
          <img style="width: 100%; height: 100%; object-fit: cover;" :src="info && info.flags.png">
        </picture>
        <div class="flex column">
          <div class="flex items-center">
            <img style="width: 50px; margin-right: 10px;" :src="info && info.flags.png">
            <div class="flex column">
              <h6 style="font-size: 15px; line-height: normal;">{{ info && info.name.common }}</h6>
              <p style="font-size: 13px;">{{ info && info.region }}</p>
            </div>
          </div>
          <p>Capital: <span>{{ info &&
            info.capital[0] }}</span></p>
          <p>Language: <span>{{
            info && Object.values(info.languages).join(', ') }}</span></p>
          <p>Population: <span>
              {{ info && info.population }} people
            </span></p>
          <p>Status: <span>{{
            info && info.status }}</span></p>
          <p>Start of week: <span>{{
            info && info.startOfWeek }}</span></p>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn @click="toogleDialog" flat label="Ok" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'DialogComponent',
  computed: {
    isOpen: {
      get () {
        return this.$store.state.dialog.isOpen
      }
    },
    info: {
      get () {
        return this.$store.state.dialog.info
      }
    }
  },
  methods: {
    toogleDialog () {
      this.$store.commit('dialog/isToogleDialog')
    }
  }
}
</script>
