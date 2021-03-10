<template>
  <div id="ColorPickers">
    <div class="colorpicker_wrap">
      <p class="color-title primary">PRIMARY</p>
      <ColorPicker
        :value ="mixinGetTheme.primary"
        @input="setThemeColor($event.hex, 'Primary')"
      />

      <p class="color-title secondary">SECONDARY</p>
      <ColorPicker
        :value ="mixinGetTheme.secondary"
        @input="setThemeColor($event.hex, 'Secondary')"
      />
    </div>
    <div class="router_wrap">
      <button type="button" class="btn" @click="reset">Reset</button>
      <router-link tag="button" type="button" class="btn" :to="{name: 'Pines2'}">Pines2</router-link>
      <router-link tag="button" type="button" class="btn" :to="{name: 'TSystem'}">TSystem</router-link>
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
    reset (hex, degree) {
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

.btn {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-top: 20px;
  font-size: 20px;
}
</style>
