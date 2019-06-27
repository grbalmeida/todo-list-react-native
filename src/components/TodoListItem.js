import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const TodoListItem = ({ text }) => (
  <TouchableOpacity>
    <View style={styles.line}>
      <Text style={styles.lineText}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

TodoListItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default TodoListItem
