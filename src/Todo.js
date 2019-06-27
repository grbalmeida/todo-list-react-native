import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import Form from './components/Form'
import TodoList from './components/TodoList'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log('Todos: ', store.getState()['todos'])
})

const Todo = () => (
  <Provider store={store}>
    <View style={styles.formContainer}>
      <Form />
      <TodoList />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30
  }
})

export default Todo
