<template>
  <div id="app" :class="{'intro-page': routeName === 'intro'}">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" :to="{name: 'index'}"><span style="color: red">Hire</span>Me</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse main-menu" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': routeName === 'intro'}">
            <router-link class="nav-link" :to="{name: 'intro'}">Intro</router-link>
          </li>
          <li class="nav-item" :class="{'active': routeName === 'requests'}">
            <router-link class="nav-link" :to="{name: 'requests'}">Requests</router-link>
          </li>
        </ul>
        <router-link class="btn btn-primary my-2 my-sm-0" :to="{name: 'create_request'}">Create requests</router-link>
      </div>
    </nav>

    <main role="main" class="container main-content">
      <router-view/>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>
