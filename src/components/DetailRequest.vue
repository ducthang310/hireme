<template>
  <div>
    <div v-if="!isLoading && request">
      <h5>Request's details:</h5>
      <div>
        <p>Title: <strong>{{request.title}}</strong></p>
        <p>Status: <strong>{{request.rq_status}}</strong></p>
        <p>First name: <strong>{{request.rq_first_name}}</strong></p>
        <p>Last name: <strong>{{request.rq_last_name}}</strong></p>
        <p>Email: <strong>{{request.rq_email}}</strong></p>
        <p>Created at: <strong>{{request.date}}</strong></p>
        <p>Description:</p>
        <div v-html="request.rq_description" class="rq-detail-des"></div>
      </div>
    </div>

    <div v-if="!isLoading && !request" class="text-center">
      Can not get detail of the request
    </div>

    <div v-if="isLoading" class="loading-container">
      <icon-loading></icon-loading>
    </div>
  </div>
</template>

<script>
  import IconLoading from '@/components/IconLoading'

  export default {
    name: 'DetailRequest',
    components: {
      IconLoading
    },
    data() {
      return {
        request: null,

        isLoading: false
      }
    },

    methods: {
      getDetail () {
        var vm = this
        vm.isLoading = true

        // Call api to get requests
        vm.$http.post(this.$mcf.baseApiUrl, {
          action: 'get_request',
          key: 'UFjSwjHQii',
          id: vm.$route.params.id
        })
          .then(res => {
            if (res.data.success) {
              vm.request = res.data.request
              vm.request.date = vm.$moment(vm.request.post_date_gmt).format('DD MMM YYYY')
            } else {
              vm.$toasted.show(res.data.message)
            }

            vm.isLoading = false
          }, () => {

            vm.isLoading = false
          })
      }
    },

    created () {
      this.getDetail()
    }

  }
</script>

