import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from "./view/screens/MainMenuScreen";
import HelloWorld from "./view/components/HelloWorld";

export default function App() {
    const Stack = createNativeStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main Menu" component={MainMenuScreen} />
          <Stack.Screen
          name="Hello World"
          component={HelloWorld}
          options={{title: 'Hello'}}
          initialParams={{'text':'Hello React!'}}
          > 
          </Stack.Screen>
        </Stack.Navigator>      
      </NavigationContainer>
    );
}
