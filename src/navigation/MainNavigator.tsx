import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabNavigator } from './MainTabNavigator';
import { Sidebar } from '../components/Sidebar';
import BillingScreen from '../screens/main/BillingScreen';
import AvailabilityScreen from '../screens/main/AvailabilityScreen';
import RevenueScreen from '../screens/main/RevenueScreen';
import AnalyticsScreen from '../screens/main/AnalyticsScreen';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Sidebar {...props} onClose={() => props.navigation.closeDrawer()} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStyle: { width: '80%' }
            }}
        >
            <Drawer.Screen name="MainTabs" component={MainTabNavigator} />
            <Drawer.Screen name="Billing" component={BillingScreen} />
            <Drawer.Screen name="Availability" component={AvailabilityScreen} />
            <Drawer.Screen name="Revenue" component={RevenueScreen} />
            <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
        </Drawer.Navigator>
    );
};

export default MainNavigator;
