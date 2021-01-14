<template>
  <div id="theme">
    Hello Theme !

    <p class="primary">Primary</p>
    <p class="secondary">Secondary</p>

    <div class="color_wrap">
      <input type="text" v-model="theme.primary" placeholder="primary">
      <input type="text" v-model="theme.secondary" placeholder="secondary">

      <button type="button" @click="setTheme">SETTING !</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  created () {
    this.theme = this.$store.getters.getTheme
  },
  computed: {
    _theme () { return this.$store.getters.getTheme }
  },
  data () {
    return {
      theme: {
        primary: '',
        secondary: '',
      }
    }
  },
  mounted () {
    const bodyStyles = document.body.style
    bodyStyles.setProperty('--primary', '#DCF4FF')
  },
  methods: {
    setTheme () {
      this.$store.commit('setTheme', this.theme)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.theme.primary)
      bodyStyles.setProperty('--secondary', this.theme.secondary)
    }
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
