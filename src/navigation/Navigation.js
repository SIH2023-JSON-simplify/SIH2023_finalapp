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
import ClientProfile from '../screens/Clients/ClientProfile';
import AddClient1 from '../screens/AddClient/AddClient1';
import CheckStatus from '../screens/CheckStatus/CheckStatus';
import Signupclient from '../screens/Signupclient/Signupclient';
import Loginclient from '../screens/Loginclient/Loginclient';
import Verifyotpclient from '../screens/Verifyotpclient/Verifyotpclient';
import ClientTabNavigator from './ClientTabNavigator';
import Cases from '../screens/Cases/Cases';
import AddCases from '../screens/Cases/AddCases';






const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Cases"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LoginLawyer" component={LoginLawyer} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="Verifyotp" component={Verifyotp} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="ClientProfile" component={ClientProfile} />
                <Stack.Screen name="AddClient1" component={AddClient1} />
                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="Cases" component={Cases} />
                <Stack.Screen name="CheckStatus" component={CheckStatus} />
                <Stack.Screen name="AddCases" component={AddCases} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen
                name="Settings" component={Settings} />
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="TabNavigator" component={TabNavigator} />

                {/* Client screens */}
                <Stack.Screen name="Loginclient" component={Loginclient} />
                <Stack.Screen name="Signupclient" component={Signupclient} />
                <Stack.Screen name="Verifyotpclient" component={Verifyotpclient} />
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="ClientTabNavigator" component={ClientTabNavigator} />
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;