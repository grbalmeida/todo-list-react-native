import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import Form from './components/Form'

const store = createStore(rootReducer)

const Todo = () => (
  <Provider store={store}>
    <View style={styles.formContainer}>
      <Form />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
    flexDirection: 'row'
  }
})

export default Todo
