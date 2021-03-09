<template>
  <div id="app">
    <router-view/>
    <div class="slide_wrap">
      <Slide
        right
        noOverlay
      >
        <ColorPickers></ColorPickers>
      </Slide>
    </div>
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
@import '@/assets/scss/slide.scss';

body {
  margin: 0;
  padding: 0;
}

.primary { color: $primary }
.secondary { color: $secondary }
</style>
