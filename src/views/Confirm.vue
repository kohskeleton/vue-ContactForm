<template>
  <FormList></FormList>
</template>

<script>
// @ is an alias to /src
import FormList from '@/components/FormList.vue'

export default {
  name: 'confirm',
  data() {
    return {
      // btnText: '入力内容を確認する'
    }
  },
  components: {
    FormList
  }
}
</script>