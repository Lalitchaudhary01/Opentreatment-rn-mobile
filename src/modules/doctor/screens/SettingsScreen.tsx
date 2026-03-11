import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { User, Shield, Bell, Eye, Database, ChevronRight, LogOut, Calendar, Users, Briefcase, TrendingUp, CreditCard, Settings as SettingsIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const SettingRow = ({ icon: Icon, label, value, type = 'link', color, screen }: any) => {
    const { colors } = useTheme();
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            style={[styles.row, { borderBottomColor: colors.border }]}
            onPress={() => screen && navigation.navigate(screen)}
        >
            <View style={[styles.rowLeft]}>
                <View style={[styles.iconBox, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                    <Icon size={20} color={color || colors.text2} />
                </View>
                <Typography weight="600" style={{ fontSize: 15, color: colors.white }}>{label}</Typography>
            </View>
            <View style={styles.rowRight}>
                {type === 'link' && (
                    <>
                        {value && <Typography variant="caption" color={colors.text3}>{value}</Typography>}
                        <ChevronRight size={18} color={colors.text3} />
                    </>
                )}
                {type === 'toggle' && (
                    <Switch value={true} trackColor={{ false: colors.border2, true: colors.green }} thumbColor="white" />
                )}
            </View>
        </TouchableOpacity>
    );
};

const SettingsScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Settings" />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={[styles.profileCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                    <View style={[styles.avatarLarge, { backgroundColor: colors.blue }]}>
                        <Typography weight="700" style={{ fontSize: 20, color: 'white' }}>RI</Typography>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Typography weight="700" style={{ fontSize: 18, color: colors.white }}>Dr. Ratnesh Iyer</Typography>
                        <Typography variant="caption" color={colors.text3}>ratnesh.iyer@opentreatment.com</Typography>
                    </View>
                    <TouchableOpacity style={[styles.editBtn, { borderColor: colors.border }]}>
                        <Typography weight="600" style={{ fontSize: 12, color: colors.blue }}>Edit</Typography>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>PRACTICE MANAGEMENT</Typography>
                    <Card style={[styles.settingsCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                        <SettingRow icon={Calendar} label="Appointments" screen="Appts" color={colors.blue} />
                        <SettingRow icon={Briefcase} label="Schedule & Availability" screen="Availability" color={colors.teal} />
                        <SettingRow icon={Users} label="Patients" screen="Patients" color={colors.amber} />
                    </Card>
                </View>

                <View style={styles.section}>
                    <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>ANALYTICS & REVENUE</Typography>
                    <Card style={[styles.settingsCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                        <SettingRow icon={TrendingUp} label="Revenue" screen="Revenue" color={colors.green} />
                        <SettingRow icon={Database} label="Practice Analytics" screen="Analytics" color={colors.purple} />
                    </Card>
                </View>

                <View style={styles.section}>
                    <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>SYSTEM</Typography>
                    <Card style={[styles.settingsCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                        <SettingRow icon={SettingsIcon} label="App Settings" color={colors.text2} />
                        <SettingRow icon={CreditCard} label="Plans & Billing" screen="Billing" color={colors.blue} />
                    </Card>
                </View>

                <TouchableOpacity style={[styles.logoutBtn, { borderColor: colors.red + '40' }]}>
                    <LogOut size={20} color={colors.red} />
                    <Typography weight="700" style={{ color: colors.red }}>Sign Out</Typography>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Typography variant="caption" color={colors.text3}>OpenTreatment v1.0.2 (Build 42)</Typography>
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    section: {
        marginBottom: 24,
    },
    sectionLabel: {
        fontSize: 11,
        letterSpacing: 1,
        marginBottom: 10,
        marginLeft: 4,
    },
    settingsCard: {
        padding: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    iconBox: {
        width: 38,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 24,
    },
    footer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 20,
        gap: 16,
        marginBottom: 24,
        borderWidth: 1,
    },
    avatarLarge: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBtn: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
    },
});

export default SettingsScreen;
