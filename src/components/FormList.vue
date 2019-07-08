<template>
  <v-container text-xs-center>
    <label>名前</label>
    <p>{{ name }}</p>

    <label>メールアドレス</label>
    <p>{{ email }}</p>

    <label>どの製品について</label>
    <p>{{ select }}</p>

    <label>個人情報の同意</label>
    <p>{{ checkbox }}</p>

    <v-btn
      @click="submit"
      to="/thanks"
    >
      送信
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'FormList',
  data() {
    return {
      //
    }
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name
      }
    },
    email: {
      get() {
        return this.$store.state.email
      }
    },
    select: {
      get() {
        return this.$store.state.select
      }
    },
    checkbox: {
      get() {
        return this.$store.state.checkbox
      }
    }
  },

  methods: {
    submit () {
      console.log('送信しました');
    }
  }
}
</script>
