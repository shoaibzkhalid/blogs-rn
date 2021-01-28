import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context)
  const id = route.params.id
  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content)
        navigation.goBack()
      }}
    />
  )
}

export default EditScreen
