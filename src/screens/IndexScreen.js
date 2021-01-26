import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Touchable,
} from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowScreen', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

// IndexScreen.na

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})
