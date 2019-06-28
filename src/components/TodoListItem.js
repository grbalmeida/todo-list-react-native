import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.line}>
      <Text style={[
        styles.lineText,
        todo.done ? styles.lineThrough : null
      ]}>
        {todo.text}
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
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  }
})

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default TodoListItem
