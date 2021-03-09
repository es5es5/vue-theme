<template>
  <div id="ColorPickers">
    <div class="colorpicker_wrap">
      <p class="color-title primary">PRIMARY</p>
      <ColorPicker
        :value ="mixinGetTheme.primary"
        @input="setThemeColor($event.hex, 'Primary')"
      />

      <p class="color-title secondary">PRIMARY</p>
      <ColorPicker
        :value ="mixinGetTheme.secondary"
        @input="setThemeColor($event.hex, 'Secondary')"
      />
    </div>
    <div class="router_wrap" v-if="true">
      <router-link tag="button" type="button" :to="{name: 'Pines2'}">Pines2</router-link>
      <router-link tag="button" type="button" :to="{name: 'TSystem'}">TSystem</router-link>
      <button type="button" @click="setInit">INIT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPickers',
  computed: {
    mixinGetTheme () { return this.$store.getters.getTheme }
  },
  methods: {
    setInit (hex, degree) {
      this.$store.commit('setThemePrimary', '#00D231')
      this.$store.commit('setThemeSecondary', '#46596C')
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
      bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
    },
    setThemeColor (hex, degree) {
      this.$store.commit(`setTheme${degree}`, hex)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
      bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
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
.color-title {
  font-weight: bold;
}
</style>
