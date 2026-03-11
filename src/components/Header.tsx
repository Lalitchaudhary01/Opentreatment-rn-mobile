import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell, Sun, Moon, Menu } from 'lucide-react-native';
import { Colors } from '../theme/theme';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Base';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    subtitle?: string;
    showProfile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showProfile = true }) => {
    const { colors, toggleTheme, isDark } = useTheme();
    const navigation = useNavigation<any>();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy2, borderBottomColor: colors.border }]}>
            <View style={styles.left}>
                <View style={styles.titleRow}>
                    <TouchableOpacity
                        style={[styles.menuBtn, { borderColor: colors.border }]}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Menu size={20} color={colors.text2} />
                    </TouchableOpacity>
                    <View>
                        <Typography variant="h2" color={colors.text} weight="700">{title}</Typography>
                        {subtitle && <Typography variant="caption" color={colors.text3}>{subtitle}</Typography>}
                    </View>
                </View>
            </View>
            <View style={styles.right}>
                <TouchableOpacity
                    style={[styles.iconBtn, { borderColor: colors.border }]}
                    onPress={toggleTheme}
                >
                    {isDark ? (
                        <Sun size={20} color={colors.text2} />
                    ) : (
                        <Moon size={20} color={colors.text2} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.iconBtn, { borderColor: colors.border }]}>
                    <Bell size={20} color={colors.text2} />
                    <View style={styles.badge} />
                </TouchableOpacity>

                {showProfile && (
                    <TouchableOpacity style={styles.profileBtn}>
                        <View style={[styles.avatar, { backgroundColor: colors.blue }]}>
                            <Typography weight="700" style={{ fontSize: 12, color: 'white' }}>RI</Typography>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        borderBottomWidth: 1,
    },
    left: {
        gap: 2,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuBtn: {
        width: 38,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconBtn: {
        width: 38,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ef4444',
        borderWidth: 1.5,
        borderColor: Colors.dark.navy2,
    },
    profileBtn: {
        marginLeft: 4,
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
