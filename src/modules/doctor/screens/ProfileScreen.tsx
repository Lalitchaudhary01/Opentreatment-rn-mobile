import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { User, Mail, Phone, MapPin, Award, Briefcase, Camera, ChevronRight } from 'lucide-react-native';

const ProfileInfoTile = ({ icon: Icon, label, value }: any) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.infoTile, { borderBottomColor: colors.border }]}>
            <View style={[styles.tileIcon, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                <Icon size={18} color={colors.text2} />
            </View>
            <View>
                <Typography variant="caption" color={colors.text3}>{label}</Typography>
                <Typography weight="600" style={{ fontSize: 15, color: colors.white }}>{value}</Typography>
            </View>
        </View>
    );
};

const ProfileScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="My Profile" showProfile={false} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.heroSection}>
                    <View style={styles.avatarContainer}>
                        <View style={[styles.avatar, { backgroundColor: colors.blue }]}>
                            <Typography weight="700" style={{ fontSize: 32, color: 'white' }}>RI</Typography>
                        </View>
                        <TouchableOpacity style={[styles.cameraBtn, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                            <Camera size={16} color={colors.text2} />
                        </TouchableOpacity>
                    </View>
                    <Typography variant="h2" weight="700" style={{ marginTop: 16, color: colors.white }}>Dr. Ratnesh Iyer</Typography>
                    <Typography variant="caption" color={colors.text2}>Senior Orthopedic Surgeon · MBBS, MD</Typography>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.miniStat}>
                        <Typography weight="700" style={{ fontSize: 18, color: colors.white }}>12+</Typography>
                        <Typography variant="caption" color={colors.text3}>Exp (Yrs)</Typography>
                    </View>
                    <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
                    <View style={styles.miniStat}>
                        <Typography weight="700" style={{ fontSize: 18, color: colors.white }}>4.8k</Typography>
                        <Typography variant="caption" color={colors.text3}>Patients</Typography>
                    </View>
                    <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
                    <View style={styles.miniStat}>
                        <Typography weight="700" style={{ fontSize: 18, color: colors.white }}>4.9</Typography>
                        <Typography variant="caption" color={colors.text3}>Rating</Typography>
                    </View>
                </View>

                <View style={styles.section}>
                    <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>CONTACT DETAILS</Typography>
                    <Card style={[styles.profileCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                        <ProfileInfoTile icon={Mail} label="Email Address" value="dr.iyer@opentreatment.com" />
                        <ProfileInfoTile icon={Phone} label="Phone Number" value="+91 98765 43210" />
                        <ProfileInfoTile icon={MapPin} label="Practice Location" value="Bandra West, Mumbai" />
                    </Card>
                </View>

                <View style={styles.section}>
                    <Typography weight="700" color={colors.text3} style={styles.sectionLabel}>PROFESSIONAL INFO</Typography>
                    <Card style={[styles.profileCard, { backgroundColor: colors.panel, borderColor: colors.border }]}>
                        <ProfileInfoTile icon={Award} label="Specialization" value="Orthopedic Surgery" />
                        <ProfileInfoTile icon={Briefcase} label="Reg. Number" value="KMC-88291-A" />
                        <View style={styles.bio}>
                            <Typography variant="caption" color={colors.text3} style={{ marginBottom: 4 }}>Bio</Typography>
                            <Typography style={{ fontSize: 14, lineHeight: 20, color: colors.text }}>
                                Dedicated orthopedic surgeon with over 12 years of experience in joint replacements and sports medicine.
                            </Typography>
                        </View>
                    </Card>
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
        paddingTop: 20,
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(59,130,246,0.05)',
        paddingVertical: 16,
        borderRadius: 20,
        marginBottom: 30,
    },
    miniStat: {
        alignItems: 'center',
        gap: 2,
    },
    statDivider: {
        width: 1,
        height: 24,
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
    profileCard: {
        padding: 0,
    },
    infoTile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: 16,
        borderBottomWidth: 1,
    },
    tileIcon: {
        width: 38,
        height: 38,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bio: {
        padding: 16,
    },
});

export default ProfileScreen;
