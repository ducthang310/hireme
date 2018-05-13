<template>
  <div>
    <div class="row rq-head">
      <div class="col-md-3">
        <button type="button" class="btn " :class="{active: status === 'completed'}" v-on:click="getRequests('completed')">Completed</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn " :class="{active: status === 'pending'}" v-on:click="getRequests('pending')">Pending</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn " :class="{active: status === 'approved'}" v-on:click="getRequests('approved')">Approved</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn " :class="{active: status === 'rejected'}" v-on:click="getRequests('rejected')">Rejected</button>
      </div>
    </div>

    <div class="row rq-content">
      <div class="col-md-12">
        <table class="table" v-show="!isLoading && requests.length">
          <thead class="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="rq in requests">
            <th scope="row">{{rq.id}}</th>
            <td>{{rq.title}}</td>
            <td>{{rq.name}}</td>
            <td>{{rq.date}}</td>
            <td>
              <router-link :to="{name: 'request_detail', params: {id: rq.id}}">View</router-link>
            </td>
          </tr>
          </tbody>
        </table>
        <p class="text-center" v-show="!isLoading && !requests.length">Has no requests</p>
        <div class="loading-container" v-show="isLoading">
          <icon-loading></icon-loading>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import IconLoading from '@/components/IconLoading'
  export default {
    name: 'Requests',
    components: {
      IconLoading
    },
    data() {
      return {
        status: 'completed', // completed, rejected, approved, pending
        requests: [],
        isLoading: false
      }
    },

    methods: {
      getRequests(status) {
        var vm = this;
        vm.status = status;

        this.isLoading = true;
        // Call api to get requests

        vm.$http.post(this.$mcf.baseApiUrl, {
          action: 'get_requests',
          key: 'UFjSwjHQii',
          status: vm.status
        })
          .then(res => {
            if (res.data.success) {
              vm.requests = res.data.requests;
              vm.requests = vm.requests.map(rq => {
                rq.name = [];
                if (rq.rq_first_name) {
                  rq.name.push(rq.rq_first_name);
                }
                if (rq.rq_last_name) {
                  rq.name.push(rq.rq_last_name);
                }
                rq.name = rq.name.join(' ');

                rq.date = vm.$moment(rq.post_date_gmt).format('DD MMM YYYY');

                return rq;
              })
            }
            this.isLoading = false;
          }, () => {
            this.isLoading = false;
          })
      }
    },

    created () {
      console.log(this.$route.query);
      var status = this.$route.query.status ? this.$route.query.status : 'completed';

      this.getRequests(status);
    }

  }
</script>

