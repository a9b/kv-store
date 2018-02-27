<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            status.96over.com
          </a>
          <div class="navbar-burger burger" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="topNav" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="">
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">

              <div v-if="!isLogined" class="field is-grouped">
                <p class="control">
                <a class="button is-primary is-outlined">
                  <icon name="user-plus"></icon>
                  <router-link to="/signup">Signup</router-link>
                </a>
                </p>
                <p class="control">
                <a class="button is-info is-outlined">
                  <icon name="sign-in"></icon>
                  <router-link to="/login">Login</router-link>
                </a>
                </p>
              </div>

              <div v-if="isLogined" class="field is-grouped">
                <p class="control">
                <a class="button is-info is-outlined">
                  <icon name="user"></icon>
                  <router-link to="/user">User</router-link>
                </a>
                </p>
                <p class="control">
                <a v-on:click="logout" class="button is-outlined">
                  <icon name="sign-out"></icon>
                  <span>Logout</span>
                </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            status.96over.com
          </h1>
          <h2 class="subtitle">
            for IoT
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
          &copy;<a href="https://96over.com">96over.com</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  mounted: function () {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('#' + burger.dataset.target)
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    })
  },
  methods: {
    logout: function () {
      this.$store.dispatch('signOut').then(() => {
        this.$router.push({name: 'Login'})
      }).catch((err) => {
        this.errorMessage = err.message
        this.protectedUI = false
      })
    }
  },
  computed: {
    isLogined: function () {
      return !(this.$store.state.userStore.user === null)
    }
  }
}
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-icon {
  display: inline-block;
  text-align: center;
  vertical-align: -.125em;
  width: 1.25em;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
@import "../node_modules/bulma/bulma.sass";
</style>
