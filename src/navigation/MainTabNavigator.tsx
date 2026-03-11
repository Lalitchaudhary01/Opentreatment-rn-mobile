import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Home, Calendar, Users, List, Plus } from 'lucide-react-native';
import { Theme } from '../theme/theme';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from '../components/Base';

// Screens
import DashboardScreen from '../screens/main/DashboardScreen';
import AppointmentsScreen from '../screens/main/AppointmentsScreen';
import PatientsScreen from '../screens/main/PatientsScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={styles.fabContainer}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={[styles.fab, { backgroundColor: colors.blue }]}>
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
                    styles.tabBar,
                    {
                        backgroundColor: colors.navy2,
                        borderTopColor: colors.border,
                    }
                ],
                tabBarActiveTintColor: colors.blue,
                tabBarInactiveTintColor: colors.text3,
                tabBarLabelStyle: styles.tabLabel,
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

const styles = StyleSheet.create({
    tabBar: {
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
    tabLabel: {
        fontSize: 10,
        fontWeight: '600',
    },
    fabContainer: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow for premium look
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
});
