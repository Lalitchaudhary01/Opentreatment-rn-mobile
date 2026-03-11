import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {
    LayoutDashboard, Calendar, Users, Briefcase, Clock,
    CreditCard, DollarSign, TrendingUp, Star, User, Settings,
    ChevronRight
} from 'lucide-react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Base';

interface SidebarProps {
    navigation: any;
    onClose: () => void;
}

const SidebarItem = ({ icon: Icon, label, screen, badge, active, navigation }: any) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            className="mb-1 flex-row items-center rounded-xl px-3 py-3"
            style={active ? { backgroundColor: 'rgba(59,130,246,0.1)' } : undefined}
            onPress={() => {
                if (['Dashboard', 'Appointments', 'Patients'].includes(screen)) {
                    navigation.navigate('MainTabs', { screen: screen });
                } else {
                    navigation.navigate(screen);
                }
                navigation.closeDrawer();
            }}
        >
            <Icon size={20} color={active ? colors.blue : colors.text2} />
            <Typography
                weight={active ? "700" : "500"}
                style={{ flex: 1, fontSize: 15, color: active ? colors.blue : colors.text2, marginLeft: 16 }}
            >
                {label}
            </Typography>
            {badge && (
                <View className="ml-2 rounded-full px-2 py-0.5" style={{ backgroundColor: label === 'Billing' ? '#f59e0b' : (label === 'Reviews' ? '#f59e0b' : colors.blue) }}>
                    <Typography weight="700" style={{ fontSize: 10, color: 'white' }}>{badge}</Typography>
                </View>
            )}
        </TouchableOpacity>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({ navigation, onClose }) => {
    const { colors, isDark } = useTheme();

    return (
        <View className="flex-1" style={{ backgroundColor: colors.navy }}>
            <View className="flex-row items-center px-6 pb-6 pt-[60px]">
                <View className="h-12 w-12 items-center justify-center rounded-[14px]" style={{ backgroundColor: colors.blue }}>
                    <User color="white" size={24} />
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                    <Typography weight="700" style={{ fontSize: 18, color: colors.text }}>OpenTreatment</Typography>
                    <Typography weight="500" style={{ fontSize: 13, color: colors.text3 }}>Sunrise Clinic, Pune</Typography>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }} showsVerticalScrollIndicator={false}>
                <Typography weight="700" color={colors.text3} style={{ fontSize: 11, letterSpacing: 1.5, marginTop: 24, marginBottom: 16, marginLeft: 8, opacity: 0.5 }}>MAIN</Typography>
                <SidebarItem navigation={navigation} icon={LayoutDashboard} label="Overview" screen="Dashboard" />
                <SidebarItem navigation={navigation} icon={Calendar} label="Appointments" screen="Appointments" badge="12" active />
                <SidebarItem navigation={navigation} icon={Users} label="Patients" screen="Patients" />
                <SidebarItem navigation={navigation} icon={Briefcase} label="Services" screen="Dashboard" />
                <SidebarItem navigation={navigation} icon={Clock} label="Availability" screen="Availability" />

                <Typography weight="700" color={colors.text3} style={{ fontSize: 11, letterSpacing: 1.5, marginTop: 24, marginBottom: 16, marginLeft: 8, opacity: 0.5 }}>FINANCE</Typography>
                <SidebarItem navigation={navigation} icon={CreditCard} label="Billing" screen="Billing" badge="3" />
                <SidebarItem navigation={navigation} icon={DollarSign} label="Revenue" screen="Revenue" />

                <Typography weight="700" color={colors.text3} style={{ fontSize: 11, letterSpacing: 1.5, marginTop: 24, marginBottom: 16, marginLeft: 8, opacity: 0.5 }}>PERFORMANCE</Typography>
                <SidebarItem navigation={navigation} icon={TrendingUp} label="Analytics" screen="Analytics" />
                <SidebarItem navigation={navigation} icon={Star} label="Reviews" screen="Dashboard" badge="4.8" />
            </ScrollView>

            <View className="gap-5 border-t p-5" style={{ borderTopColor: colors.border }}>
                <View className="flex-row gap-3">
                    <TouchableOpacity
                        className="flex-1 flex-row items-center justify-center rounded-[10px] py-2.5"
                        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                        onPress={() => {
                            navigation.navigate('MainTabs', { screen: 'More' });
                            navigation.closeDrawer();
                        }}
                    >
                        <User size={18} color={colors.text2} />
                        <Typography weight="600" style={{ color: colors.text2, marginLeft: 8 }}>Profile</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="flex-1 flex-row items-center justify-center rounded-[10px] py-2.5"
                        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                        onPress={() => {
                            navigation.navigate('MainTabs', { screen: 'More' });
                            navigation.closeDrawer();
                        }}
                    >
                        <Settings size={18} color={colors.text2} />
                        <Typography weight="600" style={{ color: colors.text2, marginLeft: 8 }}>Settings</Typography>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    className="flex-row items-center rounded-2xl p-3"
                    style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                    onPress={() => {
                        navigation.navigate('MainTabs', { screen: 'More' });
                        navigation.closeDrawer();
                    }}
                >
                    <View className="h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: colors.blue }}>
                        <Typography weight="700" style={{ fontSize: 14, color: 'white' }}>RI</Typography>
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                        <Typography weight="700" style={{ fontSize: 15, color: colors.text }}>Dr. Ramesh Iyer</Typography>
                        <Typography variant="caption" color={colors.text3}>Doctor · Admin</Typography>
                    </View>
                    <ChevronRight size={20} color={colors.text3} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
