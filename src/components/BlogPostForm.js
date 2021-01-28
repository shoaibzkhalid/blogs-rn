import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: '', content: '' },
}) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TextInput />
      <Button
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
})

export default BlogPostForm
