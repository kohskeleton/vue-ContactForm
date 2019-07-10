<template>
  <v-app>
    <v-toolbar color="indigo" app dark>
      <v-toolbar-title class="headline">
        <span>Sample Vue Form</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer color="indigo" app inset>
      <v-layout wrap justify-center>
        <span class="white--text">&copy; 2019</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>
