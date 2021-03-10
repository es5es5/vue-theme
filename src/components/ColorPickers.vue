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

      <p class="color-title font">FONT</p>
      <ColorPicker
        :value ="mixinGetTheme.font"
        @input="setThemeColor($event.hex, 'Font')"
      />

      <p class="color-title background">BACKGROUND</p>
      <ColorPicker
        :value ="mixinGetTheme.background"
        @input="setThemeColor($event.hex, 'Background')"
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
      this.$store.commit('setThemeFont', '#000000')
      this.$store.commit('setThemeBackground', '#F0F0F0')
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
      bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
      bodyStyles.setProperty('--font', this.mixinGetTheme.font)
      bodyStyles.setProperty('--background', this.mixinGetTheme.background)
    },
    setThemeColor (hex, target) {
      this.$store.commit(`setTheme${target}`, hex)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
      bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
      bodyStyles.setProperty('--font', this.mixinGetTheme.font)
      bodyStyles.setProperty('--background', this.mixinGetTheme.background)
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
  margin-bottom: 4px;
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
