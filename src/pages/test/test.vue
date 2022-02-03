<template>
  <div>
    {{ v }}
    <children :value="v" @hc="changeName"/>
  </div>
</template>

<script>
import children from './children'
export default {
  name: 'Test',
  components: {
    children
  },
  data() {
    return {
      v: { age: 3 },
      name: 'zhangsan'
    }
  },
  computed: {
    count() {
      return 'ans:' + this.$store.state.count
    }
  },
  methods: {
    changeName: function(name) {
      this.name = name
    },
    add: function() {
      console.log(this.$store)
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>
