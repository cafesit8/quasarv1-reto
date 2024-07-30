<template>
  <q-header style="background-color: transparent;">
    <div style="display: flex; padding: 30px 16px;">
      <q-select
        style="margin: auto; width: 500px; position: relative; background-color: white; padding: 20px; border-radius: 20px;"
        class="search" v-model="search" @filter="filterFn" use-input dense input-debounce="350"
        placeholder="Search for a country" hide-dropdown-icon>
        <template v-slot:append>
          <q-btn class="rounded-borders" style="background-color: #0ea5e9; font-size: 13px; color: white;">
            Buscar
          </q-btn>
        </template>
        <template #no-option>
          <q-item>
            <q-item-section class="text-grey">
              <div class="continents_container">
                <div class="header">
                  <p>Filtrar por continentes</p>
                  <button @click="handleReset" class="text-sky-500">Limpiar</button>
                </div>
                <ul class="list">
                  <li v-for="continent in continents" :key="continent" class="list_item"
                    @click="handleClick(continent)">
                    {{ continent }}
                  </li>
                </ul>
              </div>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </q-header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      search: null,
      continentSelected: '',
      continents: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    }
  },
  methods: {
    addToSongInfo (song) {
      this.$store.commit('player/setSongInfo', song)
    },
    toogleDrawer () {
      this.$store.commit('dialog/isToogleDrawer')
    },
    async getAllCountries () {
      const res = await this.$axios.get('https://restcountries.com/v3.1/all')
      this.$store.commit('countries/setCountries', res.data.slice(0, 15))
    },
    async handleClick (continent) {
      if (this.continentSelected !== continent) {
        this.continentSelected = continent
        const res = await this.$axios.get('https://restcountries.com/v3.1/region/' + continent)
        this.$store.commit('countries/setCountries', res.data)
      }
    },
    filterFn (val, update) {
      update(async () => {
        if (val === '') {
          this.getAllCountries()
          return
        }
        const res = await this.$axios.get('https://restcountries.com/v3.1/name/' + val)
        this.$store.commit('countries/setCountries', res.data)
      })
    },
    handleReset () {
      this.continentSelected = ''
      this.getAllCountries()
    }
  }
}
</script>
<style scoped lang="scss">
.continents_container {
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.5rem;
  color: #000000;
  background-color: #ffffff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      border: solid 1px;
      display: grid;
      place-content: center;
      padding: 5px 0;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
