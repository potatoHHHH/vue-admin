<template>
  <div>
    {{ myValue }}
    <button @click="changeParent">button</button>
  </div>
</template>

<script>
export default {
  name: 'Children',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: ['Object']
    }
  },
  data() {
    return {
      myValue: this.value
    }
  },
  methods: {
    changeParent() {
      console.log(123)
      this.value = { age: 5 }
    }
  }
}

</script>

<style scoped>

</style>
