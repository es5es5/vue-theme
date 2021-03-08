<template>
  <div id="theme">
    Hello Theme !

    <p class="primary">Primary</p>
    <p class="secondary">Secondary</p>

    <div class="color_wrap">
      <ColorPicker
        :value ="mixinGetTheme.primary"
        @input="setThemeColor($event.hex, 'Primary')"
      />

      <ColorPicker
        :value ="mixinGetTheme.secondary"
        @input="setThemeColor($event.hex, 'Secondary')"
      />
    </div>

    <button type="button" @click="goExample">Example</button>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  created () {
  },
  computed: {
    mixinGetTheme () { return this.$store.getters.getTheme }
  },
  data () {
    return {
    }
  },
  mounted () {
    const bodyStyles = document.body.style
    bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
    bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
  },
  methods: {
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
