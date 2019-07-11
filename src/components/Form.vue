<template>
  <v-container text-xs-center pt-5 pb-5>

    <v-form ref="form" v-model="valid">
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
        :rules="checkboxRules"
        @input="updateCheckbox"
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
import {mapState, mapMutations} from 'vuex'

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
      zipCodeRules: [
        v => v.length <= 7 || '郵便番号が正しくありません',
        v => /^[0-9]*$/.test(v) || '郵便番号は数値で入力してください'
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
      ...mapState('contact', ['name', 'kana', 'email', 'company', 'zipCode', 'address', 'tel', 'select', 'subject', 'content', 'checkbox'])
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          console.log('OKです');
        }
      },

      ...mapMutations('contact',['updateName', 'updateKana', 'updateCompany', 'updateEmail', 'updateZipCode', 'updateAddress', 'updateTel', 'updateSelect', 'updateSubject', 'updateContent', 'updateCheckbox'])

    }
  }
</script>