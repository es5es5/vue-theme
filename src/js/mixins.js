export default {
  install (Vue) {
    Vue.mixin({
      mounted () {
      },
      data () {
        return {
        }
      },
      computed: {
        mixinGetTheme () { return this.$store.getters.getTheme }
      },
      methods: {
      }
    })
  }
}
