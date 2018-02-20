<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
          </a>
          <div class="navbar-burger burger" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="topNav" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="forum.html">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                <a class="button is-small">
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>
                    Register
                  </span>
                </a>
                </p>
                <p class="control">
                <a class="button is-small is-info is-outlined">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>Login</span>
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
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass"; /* 追加 */
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
