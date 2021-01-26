import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Index',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateScreen')}
              >
                <Feather
                  name="plus"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="ShowScreen" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
