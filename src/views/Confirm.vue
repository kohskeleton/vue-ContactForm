<template>
  <FormList></FormList>
</template>

<script>
// @ is an alias to /src
import FormList from '@/components/FormList.vue'

export default {
  name: 'confirm',

  components: {
    FormList
  },

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