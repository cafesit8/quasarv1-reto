<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="drawerOpen" show-if-above bordered content-class="bg-grey-14">
      <q-list>
        <q-item-label header class="text-grey-14 bg-white q-mx-md q-my-lg rounded-borders">
          Logo
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container style="background-color: #dff0f1;">
      <router-view />
    </q-page-container>
    <DialogComponent />
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import DialogComponent from 'src/components/DialogComponent.vue'

const linksData = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'View1 ',
    link: '/view1'
  },
  {
    title: 'View 2',
    link: '/view2'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    DialogComponent
  },
  data () {
    return {
      essentialLinks: linksData
    }
  },
  computed: {
    drawerOpen: {
      get () {
        return this.$store.state.dialog.drawerOpen
      },
      set () {
        this.$store.commit('dialog/isToogleDrawer')
      }
    }
  }
}
</script>
