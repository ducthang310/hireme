<template>
  <div class="text-center">

    <div v-if="!isLoading && intro" v-html="intro">

    </div>

    <div v-if="!isLoading && !intro" class="text-center">
      Can not get intro
    </div>

    <div v-if="isLoading" class="loading-container">
      <icon-loading></icon-loading>
    </div>

  </div>
</template>

<script>
  import IconLoading from '@/components/IconLoading'

  export default {
    name: 'Intro',
    components: {
      IconLoading
    },
    computed: {},

    data() {
      return {
        intro: null,
        isLoading: false
      }
    },

    methods: {
      getIntro () {
        var vm = this
        vm.isLoading = true

        // Call api to get requests
        vm.$http.post(this.$mcf.baseApiUrl, {
          action: 'get_intro',
          key: 'UFjSwjHQii'
        })
          .then(res => {
            if (res.data.success) {
              vm.intro = res.data.intro
            } else {
              vm.$toasted.show(res.data.message)
            }

            vm.isLoading = false
          }, () => {

            vm.isLoading = false
          })
      }
    },

    created() {
      this.getIntro()
    }
  }
</script>

<style>

</style>
