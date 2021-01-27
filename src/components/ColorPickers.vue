<template>
  <div id="ColorPickers">
    <router-link tag="button" type="button" :to="{name: 'Pines2'}">Pines2</router-link>
    <router-link tag="button" type="button" :to="{name: 'TSystem'}">TSystem</router-link>
    <button type="button" @click="setInit">INIT</button>

    <ColorPicker
      :value ="_theme.primary"
      @input="setThemeColor($event.hex, 'Primary')"
    />

    <ColorPicker
      :value ="_theme.secondary"
      @input="setThemeColor($event.hex, 'Secondary')"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorPickers',
  computed: {
    _theme () { return this.$store.getters.getTheme }
  },
  methods: {
    setInit (hex, degree) {
      this.$store.commit('setThemePrimary', '#00D231')
      this.$store.commit('setThemeSecondary', '#46596C')
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this._theme.primary)
      bodyStyles.setProperty('--secondary', this._theme.secondary)
    },
    setThemeColor (hex, degree) {
      this.$store.commit(`setTheme${degree}`, hex)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this._theme.primary)
      bodyStyles.setProperty('--secondary', this._theme.secondary)
    },
    goExample () {
      this.$router.push({
        name: 'Example'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#ColorPickers {
  z-index: 5000;
  position: absolute;
  top: 20px;
  right: 50px;
}
</style>
