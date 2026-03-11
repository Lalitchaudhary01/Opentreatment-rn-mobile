import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
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
            style={[styles.navItem, active && { backgroundColor: 'rgba(59,130,246,0.1)' }]}
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
                <View style={[styles.badge, { backgroundColor: label === 'Billing' ? '#f59e0b' : (label === 'Reviews' ? '#f59e0b' : colors.blue) }]}>
                    <Typography weight="700" style={{ fontSize: 10, color: 'white' }}>{badge}</Typography>
                </View>
            )}
        </TouchableOpacity>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({ navigation, onClose }) => {
    const { colors, isDark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <View style={styles.header}>
                <View style={[styles.logoBtn, { backgroundColor: colors.blue }]}>
                    <User color="white" size={24} />
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                    <Typography weight="700" style={{ fontSize: 18, color: colors.text }}>OpenTreatment</Typography>
                    <Typography weight="500" style={{ fontSize: 13, color: colors.text3 }}>Sunrise Clinic, Pune</Typography>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.navContent} showsVerticalScrollIndicator={false}>
                <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>MAIN</Typography>
                <SidebarItem navigation={navigation} icon={LayoutDashboard} label="Overview" screen="Dashboard" />
                <SidebarItem navigation={navigation} icon={Calendar} label="Appointments" screen="Appointments" badge="12" active />
                <SidebarItem navigation={navigation} icon={Users} label="Patients" screen="Patients" />
                <SidebarItem navigation={navigation} icon={Briefcase} label="Services" screen="Dashboard" />
                <SidebarItem navigation={navigation} icon={Clock} label="Availability" screen="Availability" />

                <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>FINANCE</Typography>
                <SidebarItem navigation={navigation} icon={CreditCard} label="Billing" screen="Billing" badge="3" />
                <SidebarItem navigation={navigation} icon={DollarSign} label="Revenue" screen="Revenue" />

                <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>PERFORMANCE</Typography>
                <SidebarItem navigation={navigation} icon={TrendingUp} label="Analytics" screen="Analytics" />
                <SidebarItem navigation={navigation} icon={Star} label="Reviews" screen="Dashboard" badge="4.8" />
            </ScrollView>

            <View style={[styles.footer, { borderTopColor: colors.border }]}>
                <View style={styles.footerRow}>
                    <TouchableOpacity
                        style={[styles.footerBtn, { backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }]}
                        onPress={() => {
                            navigation.navigate('MainTabs', { screen: 'More' });
                            navigation.closeDrawer();
                        }}
                    >
                        <User size={18} color={colors.text2} />
                        <Typography weight="600" style={{ color: colors.text2, marginLeft: 8 }}>Profile</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.footerBtn, { backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }]}
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
                    style={[styles.profileCard, { backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }]}
                    onPress={() => {
                        navigation.navigate('MainTabs', { screen: 'More' });
                        navigation.closeDrawer();
                    }}
                >
                    <View style={[styles.avatar, { backgroundColor: colors.blue }]}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 24,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBtn: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navContent: {
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    sectionLabel: {
        fontSize: 11,
        letterSpacing: 1.5,
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 8,
        opacity: 0.5,
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 4,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginLeft: 8,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        gap: 20,
    },
    footerRow: {
        flexDirection: 'row',
        gap: 12,
    },
    footerBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
