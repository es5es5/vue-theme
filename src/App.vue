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
    <img src="@/assets/images/Github.svg" alt="Github" class="github" @click="goGithub">
  </div>
</template>

<script>
import ColorPickers from './components/ColorPickers'

export default {
  name: 'App',
  components: {
    ColorPickers
  },
  methods: {
    goGithub () { window.open('https://github.com/es5es5/vue-theme', '_blank') }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/slide.scss';

body {
  margin: 0;
  padding: 0;
  color: $font;
}

*::-webkit-scrollbar { display: none; } /* Hide scrollbar for Chrome, Safari and Opera */
* { -ms-overflow-style: none; } /* IE and Edge */
* { scrollbar-width: none; }  /* Firefox */

.primary { color: $primary }
.secondary { color: $secondary }
.font { color: $font }
.border { color: $border }
</style>

<style lang="scss" scoped>
.github {
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
