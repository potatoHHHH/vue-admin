<template>
  <div>
    <div class="a-b">
      <div class="b"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Guide'
}
</script>

<style lang="scss" scoped>
.a   {
  background: yellow;
  width: 100px;
  height: 100px;
  &-b{
    width: 30px;
    height: 300px;
    background: red;
  }
}
</style>
