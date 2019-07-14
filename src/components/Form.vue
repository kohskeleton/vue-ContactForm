<template>
  <v-container text-xs-center pt-5 pb-5>
    <h1>Contact Us</h1>
    <p>お問い合わせ内容を入力してください</p>

    <v-form ref="form" v-model="valid" method="POST" data-netlify="true">
      <v-text-field
        :value="name"
        :rules="nameRules"
        :counter="10"
        @input="updateName"
        label="名前"
        required
      >
        <template v-slot:label>
          名前 <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        :value="kana"
        :rules="kanaRules"
        label="ふりがな"
        @input="updateKana"
        required
      >
        <template v-slot:label>
          ふりがな <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        :value="company"
        @input="updateCompany"
        label="社名"
      ></v-text-field>
      <v-text-field
        :value="email"
        :rules="emailRules"
        @input="updateEmail"
        required
      >
        <template v-slot:label>
          メールアドレス <small>(必須)</small>
        </template>
      </v-text-field>
      <v-text-field
        :value="zipCode"
        :rules="zipCodeRules"
        @input="updateZipCode"
        label="郵便番号"
      ></v-text-field>
      <v-text-field
        :value="address"
        :rules="addressRules"
        :counter="50"
        @input="updateAddress"
        label="住所"
      ></v-text-field>
      <v-text-field
        :value="tel"
        :rules="telRules"
        @input="updateTel"
        label="電話番号"
      ></v-text-field>
      <v-select
        :value="select"
        :items="items"
        label="どの製品について"
        @input="updateSelect"
      ></v-select>
      <v-text-field
        :value="subject"
        :rules="subjectRules"
        @input="updateSubject"
        label="件名"
        required
      >
        <template v-slot:label>
          件名 <small>(必須)</small>
        </template>
      </v-text-field>
      <v-textarea
        :value="content"
        :rules="contentRules"
        @input="updateContent"
        label="お問い合わせ内容"
        required
        >
          <template v-slot:label>
            お問合せ内容 <small>(必須)</small>
          </template>
        </v-textarea>

      <v-checkbox
        :value="checkbox"
        false-value="同意しない"
        true-value="同意します"
        :rules="checkboxRules"
        @input="updateCheckbox"
        label="個人情報の保持の同意（必須）"
        required
      ></v-checkbox>

      <v-layout justify-center mt-4>
        <v-flex sm6>
          <v-btn
            round
            block
            color="primary"
            :disabled="!valid"
            @click="submit"
          >
            確認
          </v-btn>
        </v-flex>
      </v-layout>

    </v-form>

  </v-container>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

  export default {
    data: () => ({
      valid: false,
      checkBoxValue: false,
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
      zipCodeRules: [
        v => v.length <= 7 || '郵便番号が正しくありません',
        v => /^[0-9]*$/.test(v) || '郵便番号は数値で入力してください'
      ],
      addressRules: [
        v => v.length <= 50 || '住所は50文字未満にする必要があります'
      ],
      telRules: [
        v => /^[0-9]*$/.test(v) || '電話番号は数値で入力してください'
      ],
      items: [
        'Aサービスについて',
        'Bサービスについて',
        'Cサービスについて',
        'その他'
      ],
      subjectRules: [
        v => !!v || '件名を入力してください'
      ],
      contentRules: [
        v => !!v || 'お問い合わせ内容を入力してください'
      ],
      checkboxRules: [
        v => !!v || '続行するには同意する必要があります'
      ]
    }),
    computed: {
      ...mapState('contact', ['name', 'kana', 'email', 'company', 'zipCode', 'address', 'tel', 'select', 'subject', 'content', 'checkbox','register'])
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.updateRegister()
          this.$router.push({ path: 'confirm' })
        }
      },
      ...mapMutations('contact',['updateName', 'updateKana', 'updateCompany', 'updateEmail', 'updateZipCode', 'updateAddress', 'updateTel', 'updateSelect', 'updateSubject', 'updateContent','updateCheckbox',  'updateRegister'])
    }
  }
</script>