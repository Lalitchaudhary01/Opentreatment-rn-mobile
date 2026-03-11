import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Platform } from 'react-native';
import { Home, Calendar, Users, List, Plus } from 'lucide-react-native';
import { useTheme } from '../theme/ThemeProvider';

// Screens
import DashboardScreen from '../modules/doctor/screens/DashboardScreen';
import AppointmentsScreen from '../modules/doctor/screens/AppointmentsScreen';
import PatientsScreen from '../modules/doctor/screens/PatientsScreen';
import SettingsScreen from '../modules/doctor/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            className="-top-5 items-center justify-center"
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View
                className="h-[60px] w-[60px] items-center justify-center rounded-full"
                style={{
                    backgroundColor: colors.blue,
                    shadowColor: '#3b82f6',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 12,
                    elevation: 8,
                }}
            >
                <Plus color="white" size={32} />
            </View>
        </TouchableOpacity>
    );
};

export const MainTabNavigator = () => {
    const { colors, isDark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: [
                    {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: Platform.OS === 'ios' ? 88 : 68,
                        elevation: 0,
                        borderTopWidth: 1,
                        paddingBottom: Platform.OS === 'ios' ? 25 : 10,
                        paddingTop: 10,
                    },
                    {
                        backgroundColor: colors.navy2,
                        borderTopColor: colors.border,
                    }
                ],
                tabBarActiveTintColor: colors.blue,
                tabBarInactiveTintColor: colors.text3,
                tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Appointments"
                component={AppointmentsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Action"
                component={DashboardScreen} // Centered FAB logic
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            <Tab.Screen
                name="Patients"
                component={PatientsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="More"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <List size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};
