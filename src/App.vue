<template>
  <div id="app">
    <router-view/>
    <ColorPickers></ColorPickers>
  </div>
</template>

<script>
import ColorPickers from './components/ColorPickers'

export default {
  name: 'App',
  components: {
    ColorPickers
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.primary { color: $primary }
.secondary { color: $secondary }
</style>
