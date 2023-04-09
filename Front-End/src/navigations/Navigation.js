import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Courses from "../screens/Cources";
import Lesson from "../screens/Lesson";
import VideoPage from "../screens/VideoPage";
import WrittingCoppy from "../screens/WrittingCoppy";
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
            {/* <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Cources"
              component={Courses}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Lesson"
              component={Lesson}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="VideoPage"
              component={VideoPage}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="WrittingCoppy"
              component={WrittingCoppy}
              options={{ headerShown: false }}
            />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
