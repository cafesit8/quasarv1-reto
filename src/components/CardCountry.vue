<template>
  <article :key="country.name.common" class="card bg-white" @click="toogleDialog(country)">
    <picture>
      <img :src="country.flags.png" />
    </picture>
    <div class="info">
      <img :src="country.flags.png" />
      <div>
        <h6>
          {{ country.name.common }}
        </h6>
        <p>
          {{ country.region }}
        </p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    country: {
      type: Object
    }
  },
  methods: {
    toogleDialog (country) {
      this.$store.commit('dialog/isToogleDialog')
      this.$store.commit('dialog/setInfo', country)
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;

  picture {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }

  .info {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      border-radius: 50%;
    }
  }
}
</style>
