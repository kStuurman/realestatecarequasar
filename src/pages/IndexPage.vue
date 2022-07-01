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
      icon="eco"
    >Toegewezen Rapportages</q-btn>

     <q-btn class="button2"
      padding="lg"
      color="primary"
      icon="eco"
    >Uitgevoerde Rapportages</q-btn>

     <q-btn class="button3"
      padding="lg"
      color="primary"
      icon="eco"
    >Kennisbase</q-btn>

     <q-btn class="button4"
      padding="lg"
      color="primary"
      icon="eco"
    >Instellingen</q-btn>
  </div>
</div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
