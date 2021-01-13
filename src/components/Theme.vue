<template>
  <div id="theme">
    Hello Theme !

    <p class="primary">Primary</p>
    <p class="secondary">Secondary</p>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  mounted () {
    const bodyStyles = document.body.style
    bodyStyles.setProperty('--primary', '#DCF4FF')
  }
}
</script>

<style lang="scss" scoped>
#theme {
  background-color: gray;
  height: 100vh;
}

.primary {
  color: $primary;
}
.secondary {
  color: $secondary;
}
</style>
