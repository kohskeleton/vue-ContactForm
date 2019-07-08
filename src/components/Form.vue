<template>
  <v-container text-xs-center>

  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="名前"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="メールアドレス"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      label="どの製品について"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || '続行するには同意する必要があります。']"
      label="個人情報の保持の同意"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
      to="/confirm"
    >
      確認
    </v-btn>

  </v-form>

  </v-container>
</template>

<script>
// import { mapActions } from 'vuex'
  export default {
    data: () => ({
      valid: false,
      nameRules: [
        v => !!v || '名前を入力してください',
        v => v.length <= 10 || '名前は10文字未満にする必要があります'
      ],
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'メールアドレスが有効ではありません'
      ],
      // select: null,
      items: [
        'Aサービスについて',
        'Bサービスについて',
        'Cサービスについて',
        'その他'
      ]
      // checkbox: false
    }),
    computed: {
      name: {
        get() {
          return this.$store.state.name
        },
        set(value) {
          this.$store.commit('updateName', value)
        }
      },
      email: {
        get() {
          return this.$store.state.email
        },
        set(value) {
          this.$store.commit('updateEmail', value)
        }
      },
      select: {
        get() {
          return this.$store.state.select
        },
        set(value) {
          this.$store.commit('updateSelect', value)
        }
      },
      checkbox: {
        get() {
          return this.$store.state.checkbox
        },
        set(value) {
          this.$store.commit('updateCheckbox', value)
        }
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          console.log('OKです');
        }
      },
      updateName(e) {
        this.$store.commit('updateName', e.target.value)
      },
      updateEmail(e) {
        this.$store.commit('updateEmail', e.target.value)
      },
      updateSelect(e) {
        this.$store.commit('updateSelect', e.target.value)
      },
      updateCheckbox(e) {
        this.$store.commit('updateCheckbox', e.target.value)
      }
    }
  }
</script>