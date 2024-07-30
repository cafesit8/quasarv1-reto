<template>
  <q-item clickable>
    <RouterLink :to="link" exactActiveClass="active" class="item flex items-center">
      <q-item-label>{{ title }}</q-item-label>
    </RouterLink>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.item {
  font-size: 15px;
  font-weight: 300;
  width: 100% !important;
  color: white !important;
  padding: 10px 20px;
}

.active {
  color: gray !important;
  font-weight: 600;
  font-size: 16px;
  background-color: white;
  border-radius: 15px;
  padding: 10px 20px;
}

.item {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
</style>
