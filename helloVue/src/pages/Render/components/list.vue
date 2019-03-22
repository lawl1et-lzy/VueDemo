<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  data () {
    return {
    }
  },
  mounted () {
    console.log('aaa', this.$store.state.list)
  },
  computed: {
    ...mapState({
      list: (state) => state.list
    })
  },
  methods: {
    ...mapMutations(['delete'])
  },
  render () {
    return (
      <div slot="slot">
        {
          this.list.map((v, i) => {
            return (<p>{i}-{v} <span onClick={() => this.delete(i)}>删除</span></p>)
          })
        }
      </div>
    )
  }
}
</script>
