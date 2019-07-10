<template>
  <v-container text-xs-center pt-5 pb-5>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="名前"
        required
      >
        <template v-slot:label>
          名前 <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        v-model="kana"
        :rules="kanaRules"
        label="ふりがな"
        required
      >
        <template v-slot:label>
          ふりがな <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        v-model="company"
        :rules="companyRules"
        label="社名"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        required
      >
        <template v-slot:label>
          メールアドレス <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        v-model="zipCode"
        :rules="zipCodeRules"
        label="郵便番号"
      ></v-text-field>
      <v-text-field
        v-model="address"
        :rules="addressRules"
        label="住所"
      ></v-text-field>
      <v-text-field
        v-model="tel"
        :rules="telRules"
        label="電話番号"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        label="どの製品について"
      ></v-select>
      <v-text-field
        v-model="subject"
        :rules="subjectRules"
        label="件名"
        required
      >
        <template v-slot:label>
          件名 <small>(必須)</small>
        </template>
      </v-text-field>
      <v-textarea
        v-model="content"
        :rules="contentRules"
        label="お問い合わせ内容"
        required
        >
          <template v-slot:label>
            お問合せ内容 <small>(必須)</small>
          </template>
        </v-textarea>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || '続行するには同意する必要があります。']"
        label="個人情報の保持の同意（必須）"
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
      kanaRules: [
        v => !!v || 'ふりがなを入力してください'
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
      ],
      // checkbox: false
      subjectRules: [
        v => !!v || '件名を入力してください'
      ],
      contentRules: [
        v => !!v || 'お問い合わせ内容を入力してください'
      ]
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