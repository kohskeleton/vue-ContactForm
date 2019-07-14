<template>
  <v-app>
    <v-toolbar color="primary" app>
      <v-toolbar-title class="headline">
        <router-link to="/"><span class="white--text">Sample Vue Form</span></router-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary">
      <v-layout wrap justify-center>
        <span class="white--text">&copy; 2019</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {

  created: function () {
    this.registerCheck()
  },
  methods: {
    registerCheck() {
      // フォーム未入力の場合は、入力画面にリダイレクト
      if (!this.$store.state.contact.register) {
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
