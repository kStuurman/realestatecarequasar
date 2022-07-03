<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logogreen.png">
          </q-avatar>
          Real Estate Care
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
        <q-footer elevated class="footer">
      <q-toolbar>
          <q-btn class="homeButton"
             @click="$router.replace('/')">
           <span class="material-symbols-outlined">Home
</span></q-btn>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [

]

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
