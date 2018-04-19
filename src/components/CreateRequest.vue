<template>
  <div>
    <h5>Your requests</h5>
    <div class="row">
      <div class="col-md-4 form-group">
        <div class="form-group">
          <label>First name</label>
          <input type="text" class="form-control" v-model="request.first_name"/>
        </div>
        <div class="form-group">
          <label>Last name</label>
          <input type="text" class="form-control" v-model="request.last_name"/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Subject</label>
          <input type="text" class="form-control"/>
        </div>
      </div>

      <div class="col-md-4">
        <vue-dropzone class="btn-dropzone" ref="zonePhoto" id="dropzone" :options="dropzoneOptions" v-on:vdropzone-sending="callBackSending" v-on:vdropzone-thumbnail="callBackAddedFile" v-on:vdropzone-error="callBackFileError" v-on:vdropzone-success="callBackUploadSuccess" v-on:vdropzone-complete="callBackUploadComplete" :destroyDropzone="true"></vue-dropzone>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <label>Description</label>
        <vue-editor v-model="request.description"></vue-editor>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 rq-controls">
        <button type="button" class="btn btn-line-primary" v-on:click="send">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
  import vue2Dropzone from 'vue2-dropzone'
  import { VueEditor } from 'vue2-editor'

  export default {
    name: 'CreateRequest',
    components: {
      vueDropzone: vue2Dropzone,
      VueEditor
    },
    data() {
      return {
        request: {
          first_name: '',
          last_name: '',
          email: '',
          subject: '',
          description: ''
        },
        dropzoneOptions: {
          url: this.$mcf.api.file.upload,
          maxFilesize: 5,
          headers: {
            "Cache-Control": false
          },
          autoProcessQueue: true,
          acceptedFiles: ".jpg,.jpeg,.png,.gif",
        },
      }
    },

    methods: {
      callBackAddedFile (file, dataUrl) {
        if (file && file.status !== 'error') {
          this.data.newPhoto = dataUrl
        }
      },

      callBackUploadSuccess (file, response) {
        this.data.user.photo_id = response.data.file._id
        this.uploading = false
      },

      callBackUploadComplete (file) {
        this.uploading = false
      },

      callBackFileError (file, message) {
        if (typeof message !== 'string') {
          this.$toasted.show('Can not upload your image.')
        } else {
          this.$toasted.show(message)
        }
        this.data.newPhoto = null
      },

      callBackSending () {
        this.uploading = true
      },

      send () {
        console.log(this.request);
      }
    }

  }
</script>

