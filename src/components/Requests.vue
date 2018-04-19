<template>
  <div>
    <div class="row rq-head">
      <div class="col-md-3">
        <button type="button" class="btn active">Completed</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn ">Pending</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn ">Approved</button>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn ">Rejected</button>
      </div>
    </div>

    <div class="row rq-content">
      <div class="col-md-12">
        <table class="table">
          <thead class="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subject</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Make a website</td>
            <td>John Smith</td>
            <td>20 Aug 2017</td>
            <td><a href="https://shiroad.com">View</a></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Make a website</td>
            <td>John Smith</td>
            <td>20 Aug 2017</td>
            <td><a href="https://shiroad.com">View</a></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Make a website</td>
            <td>John Smith</td>
            <td>20 Aug 2017</td>
            <td><a href="https://shiroad.com">View</a></td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Requests',
    data() {
      return {}
    }
  }
</script>

