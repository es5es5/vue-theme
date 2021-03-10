<template>
  <div id="app">
    <router-view/>
    <div class="slide_wrap">
      <Slide
        right
        noOverlay
        :crossIcon="false"
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

*::-webkit-scrollbar { display: none; } /* Hide scrollbar for Chrome, Safari and Opera */
* { -ms-overflow-style: none; } /* IE and Edge */
* { scrollbar-width: none; }  /* Firefox */

.primary { color: $primary }
.secondary { color: $secondary }
.font { color: $font }
.background { color: $background }
</style>

<style lang="scss" scoped>
</style>
