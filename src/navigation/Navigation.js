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
import Register from '../screens/Register/Register';
import VideoCall from '../screens/VideoCall/VideoCall';
import SelectRole from '../screens/SelectRole/SelectRole';
import AddSchedule from '../screens/AddSchedule/AddSchedule';
import IntroScreen from '../screens/IntroScreen/IntroScreen';






const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="LoginLawyer" component={LoginLawyer} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
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