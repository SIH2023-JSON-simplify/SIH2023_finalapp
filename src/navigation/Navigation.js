import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import LoginLawyer from '../screens/LoginLawyer/LoginLawyer';
import SignupLawyer from '../screens/SignupLawyer/SignupLawyer';
import Verifyotp from '../screens/Verifyotp/Verifyotp';
import TabNavigator from './TabNavigator';
import Notification from '../screens/Notification/Notification';
import Settings from '../screens/Settings/Settings';
import VideoCall from '../screens/VideoCall/VideoCall';






const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="VideoCall"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="LoginLawyer" component={LoginLawyer} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="Verifyotp" component={Verifyotp} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen
                name="Settings" component={Settings} />
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="TabNavigator" component={TabNavigator} />

                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;