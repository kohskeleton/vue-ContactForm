<template>
  <v-container text-xs-center pt-5 pb-5>
    <h1 class="mb-4">Thank you !</h1>
    <h2>お問い合わせありがとうございました</h2>
    <p>送信が完了しました</p>
  </v-container>
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
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>