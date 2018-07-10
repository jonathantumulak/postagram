<template>
  <div class="navbar-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <NavbarLogo />
          </div>
        </div>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
    export default {
        components: {
            NavbarLogo: require('./navbar/NavbarLogo.vue').default
        }
    }
</script>

<style lang="scss" scoped>
    .md-app {
        max-height: 200px;
        border: 1px solid rgba(#000, .12);
    }
</style>
