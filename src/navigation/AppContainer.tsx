import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { CarPhotosAdding, CarPhotos, ImageView } from '~/screens'

const navigatorOption = {
  headerShown: false,
  headerBackTitle: 'Назад'
}

const Stack = createStackNavigator()

export default function AppContainer() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CarPhotosAdding' screenOptions={navigatorOption}>
        <Stack.Screen name='CarPhotosAdding' component={CarPhotosAdding} />
        <Stack.Screen name='CarPhotos' options={{ headerShown: true, title: '' }} component={CarPhotos} />
        <Stack.Screen name='ImageView' options={{ headerShown: true, title: '',  }} component={ImageView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}