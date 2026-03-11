import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../modules/auth/screens/RegisterScreen';
import VerifyEmailScreen from '../modules/auth/screens/OtpVerifyScreen';
import ProfessionalDetailsScreen from '../modules/auth/screens/doctor/ProfessionalDetailsScreen';
import ClinicDetailsScreen from '../modules/auth/screens/doctor/ClinicDetailsScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#0b1120' }
            }}
        >
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
            <Stack.Screen name="ProfDetails" component={ProfessionalDetailsScreen} />
            <Stack.Screen name="ClinicDetails" component={ClinicDetailsScreen} />
            <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
