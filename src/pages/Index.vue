<template>
  <q-page class="flex flex-center q-pa-md">
    <HeaderComponent :toogleDrawer="toogleDrawer" />
    <section class="container">
      <CardCountry v-for="country in countries" :key="country.name.common" :country="country" />
    </section>
  </q-page>
</template>

<script>
import CardCountry from 'src/components/CardCountry.vue'
import HeaderComponent from 'src/components/HeaderComponent.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  components: {
    HeaderComponent,
    CardCountry
  },
  computed: {
    countries: {
      get () {
        return this.$store.state.countries.countries
      }
    }
  },
  async mounted () {
    const res = await this.$axios.get('https://restcountries.com/v3.1/all')
    this.$store.commit('countries/setCountries', res.data.slice(0, 15))
  },
  methods: {
    toogleDialog (country) {
      this.$store.commit('dialog/isToogleDialog')
      this.$store.commit('dialog/setInfo', country)
    },
    toogleDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}
</style>
