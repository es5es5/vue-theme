<template>
  <div id="theme">
    Hello Theme !

    <button type="button" @click="goExample('Pines2')">PINES 2</button>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  created () {
  },
  computed: {
    _theme () { return this.$store.getters.getTheme }
  },
  data () {
    return {
    }
  },
  mounted () {
    const bodyStyles = document.body.style
    bodyStyles.setProperty('--primary', '#DCF4FF')
  },
  methods: {
    setThemeColor (hex, degree) {
      this.$store.commit(`setTheme${degree}`, hex)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this._theme.primary)
      bodyStyles.setProperty('--secondary', this._theme.secondary)
    },
    goExample (name) {
      this.$router.push({
        name
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
