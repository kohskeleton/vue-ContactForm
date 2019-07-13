<template>
  <v-container text-xs-center pt-5 pb-5>
    <h1>Confirmation</h1>
    <p class="mb-4">お問い合わせ内容の確認</p>

    <label>【名前】</label>
    <p>{{ name }}</p>

    <label>【ふりがな】</label>
    <p>{{ kana }}</p>

    <label>【社名】</label>
    <p>{{ company }}</p>

    <label>【メールアドレス】</label>
    <p>{{ email }}</p>

    <label>【郵便番号】</label>
    <p>{{ zipCode }}</p>

    <label>【住所】</label>
    <p>{{ address }}</p>

    <label>【電話番号】</label>
    <p>{{ tel }}</p>

    <label>【どの製品について】</label>
    <p>{{ select }}</p>

    <label>【件名】</label>
    <p>{{ subject }}</p>

    <label>【お問合せ内容】</label>
    <p>{{ content }}</p>

    <label>【個人情報の同意】</label>
    <p>{{ checkbox }}</p>

    <v-btn
      @click="submit"
    >
      送信
    </v-btn>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'FormList',

  computed: {
    ...mapState('contact', ['name', 'kana', 'email', 'company', 'zipCode', 'address', 'tel', 'select', 'subject', 'content', 'checkbox'])
  },

  methods: {
    submit () {
      this.$router.push({ path: 'thanks' })
    }
  }
}
</script>
