<template>
  <div id="ColorPickers">
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
