<script>
import List from './components/list.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      value: '1'
    }
  },
  methods: {
    ...mapMutations(['add']),
    input (e) {
      this.value = e.target.value
    },
    handleClick () {
      if (this.value !== '') {
        this.add(this.value)
        this.value = ''
      }
    }
  },
  render () {
    return (
      <div class="form-group">
        <input
          class="form-input"
          type="text"
          value={this.value}
          on-input={this.input}
        />
        <button
          type="button"
          class="btn"
          onClick={this.handleClick}
        >submit</button>
        <List>
          <div name="slot">
            slotTst
          </div>
        </List>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.form-input{
  border: 1px solid #ccc;
}
.btn{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
}
</style>
