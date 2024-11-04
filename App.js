import React, { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseEvaluationReport from './Pages/CourseEvaluationReport';
import OBEvaluationReport from './Pages/OBEvaluationReport';
const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          { text: 'Yes', onPress: () => BackHandler.exitApp() },
          { text: 'No', onPress: () => null },
        ],
        { cancelable: false },
      );
      return true; // Return true to prevent default back button behavior
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove(); // Cleanup the event listener
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CourseEvaluationReport">
          <Stack.Screen
            name="CourseEvaluationReport"
            component={CourseEvaluationReport}
            options={{
              title: 'Course Evaluation Report',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerTintColor: '#303842',
            }}
          />
          <Stack.Screen
            name="OBEvaluationReport"
            component={OBEvaluationReport}
            options={{
              title: 'OBE Evaluation Report',
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
              headerTintColor: '#303842',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
