import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import Input from './components/Input'

const store = createStore(rootReducer)

export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onChangeText (text) {
    this.setState({
      text
    })
  }

  onPress () {
    console.log(this.state.text)
  }

  render () {
    const { text } = this.state

    return (
      <Provider store={store}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={text => this.onChangeText(text)}
              value={text}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.onPress()}
              title='add'
            />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
})
