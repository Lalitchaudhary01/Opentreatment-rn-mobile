import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/onboarding/SignUpScreen';
import VerifyEmailScreen from '../screens/onboarding/VerifyEmailScreen';
import ProfessionalDetailsScreen from '../screens/onboarding/ProfessionalDetailsScreen';
import ClinicDetailsScreen from '../screens/onboarding/ClinicDetailsScreen';
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
