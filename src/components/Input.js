import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ onChangeText, value }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
  />
)

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingBottom: 15
  }
})

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
