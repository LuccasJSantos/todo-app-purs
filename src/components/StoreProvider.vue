<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="{ actions, todos }">
      <Todos :actions="actions" :todos="todos" />
    </template>
  </Provider>
</template>

<script>
import { bindActionCreators } from 'redux'
import Provider from 'vuejs-redux'

import Todos from '@/components/Todos.vue'

import store from '@/state/store'
import { actions as todosActions } from '@/state/Todos'

export default {
  name: 'StoreProvider',

  components: { Provider, Todos },

  data () {
    return {
      store
    }
  },

  methods: {
    mapDispatchToProps (dispatch) {
      return { actions: bindActionCreators(todosActions, dispatch) }
    },

    mapStateToProps (state) {
      return { todos: state }
    }
  }
}
</script>

<style scoped>
</style>
