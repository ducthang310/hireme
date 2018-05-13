<template>
  <div>
    <form @submit.prevent="send()">
      <h5>Your requests</h5>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group" :class="{'has-error': errors.has('first_name') }">
            <label>First name</label>
            <input type="text" class="form-control" v-model="request.first_name" v-validate="'required'" data-vv-name="first_name"/>
          </div>
          <div class="form-group" :class="{'has-error': errors.has('last_name') }">
            <label>Last name</label>
            <input type="text" class="form-control" v-model="request.last_name" v-validate="'required'" data-vv-name="last_name"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group" :class="{'has-error': errors.has('email') }">
            <label>Email</label>
            <input type="email" class="form-control" v-model="request.email" v-validate="'required'" data-vv-name="email"/>
          </div>
          <div class="form-group" :class="{'has-error': errors.has('title') }">
            <label>Title</label>
            <input type="text" class="form-control" v-model="request.title" v-validate="'required'" data-vv-name="title"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" :class="{'has-error': errors.has('description') }">
          <label>Description</label>
          <vue-editor v-model="request.description" v-validate="'required'" :editorToolbar="customToolbar" data-vv-name="description"></vue-editor>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 rq-controls">
          <button type="button" class="btn btn-primary btn-x" v-on:click="send()" v-show="!isSending">Send</button>
          <button type="button" class="btn btn-primary btn-x btn-loading s-white" v-show="isSending">
            <icon-loading></icon-loading>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import IconLoading from '@/components/IconLoading'

  export default {
    name: 'CreateRequest',
    components: {
      VueEditor,
      IconLoading
    },
    data() {
      return {
        request: {
          first_name: '',
          last_name: '',
          email: '',
          title: '',
          description: ''
        },
        customToolbar: [
          [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          ['link'],
          ['clean'],

          ['clean']
        ],

        isSending: false
      }
    },

    methods: {
      send () {
        var vm = this

        vm.$validator.validateAll().then((result) => {
          if (result) {
            vm.isSending = true

            // Call api to get requests
            vm.$http.post(this.$mcf.baseApiUrl, {
              action: 'create_requests',
              key: 'UFjSwjHQii',
              request: vm.request
            }).then(res => {
              console.log(res)
              vm.$toasted.show(res.data.message)
              vm.$router.push({name: 'requests', query: { status: 'pending' }})

              vm.isSending = false
            }, () => {

              vm.isSending = false
            })
          } else {
            vm.$toasted.error('All fields are required')
          }
        })

      }
    }

  }
</script>

