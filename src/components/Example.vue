<template>
  <div id="theme">
    Hello Theme !

    <button type="button" @click="goExample('Pines2')">PINES 2</button>
    <button type="button" @click="goExample('TSystem')">T SYSTEM</button>
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
  },
  methods: {
    setThemeColor (hex, degree) {
      this.$store.commit(`setTheme${degree}`, hex)
      const bodyStyles = document.body.style
      bodyStyles.setProperty('--primary', this.mixinGetTheme.primary)
      bodyStyles.setProperty('--secondary', this.mixinGetTheme.secondary)
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
