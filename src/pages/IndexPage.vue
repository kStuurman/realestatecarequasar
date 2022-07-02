<template>

  <q-page class="flex flex-center">
    <div class="centerPageLogo">
    <img
      alt="Real Estate Care Logo"
      src="~assets/logo.png"
      style="width: 200px; height: 200px"
    ></div>

<div id="q-app" style="min-height: 100vh;">
  <div class="q-pa-md q-gutter-sm">
    <q-btn class="button1"
      padding="lg"
      color="primary"
      icon="book"
      @click="$router.replace('/ToegewezenRapportages')"
    >Toegewezen Rapportages</q-btn>

     <q-btn class="button2"
      padding="lg"
      color="primary"
      icon="check_circle"
       @click="$router.replace('/UitgevoerdeRapportages')"
    >Uitgevoerde Rapportages</q-btn>

     <q-btn class="button3"
      padding="lg"
      color="primary"
      icon="subject"
       @click="$router.replace('/DocumentatiePage')"
    >Documentatie</q-btn>

     <q-btn class="button4"
      padding="lg"
      color="primary"
      icon="settings"
       @click="$router.replace('/InstellingenPage')"
    >Instellingen</q-btn>
  </div>

    <q-footer elevated class="footer">
      <q-toolbar>
          <q-btn class="homeButton"
             @click="$router.replace('/')">
           <span class="material-symbols-outlined">Home
</span></q-btn>
      </q-toolbar>
    </q-footer>
</div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
