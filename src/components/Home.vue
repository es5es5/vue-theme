<template>
  <div id="theme">
    <h1>
      Hello, Vue Theme !
    </h1>
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
h1 {
  padding: 20%;
  margin: 0;
  color: $primary;
  font-size: 50px;
}
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
