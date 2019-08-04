<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (!localStorage.getItem('token')){
      this.$router.push("/login")
    }
  }
}
</script>


<style lang="scss">
@import "./assets/scss/bootstrap.scss";
</style>
