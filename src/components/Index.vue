<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  beforeCreate() {
    this.$router.push({name: 'intro'})
  }
}
</script>

