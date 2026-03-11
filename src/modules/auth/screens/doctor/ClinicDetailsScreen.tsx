import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '../../../../theme/ThemeProvider';
import { Typography } from '../../../../components/Base';
import { ChevronLeft, Check, Stethoscope, Heart, Sparkles, Activity, User, Flower2 } from 'lucide-react-native';
import { AuthFooter } from '../../../../components/AuthFooter';

const ClinicDetailsScreen = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [clinicName, setClinicName] = useState('Sunrise Clinic');
    const [city, setCity] = useState('pune');
    const [pinCode, setPinCode] = useState('411029');
    const [address, setAddress] = useState('sqksq');
    const [speciality, setSpeciality] = useState('General Physician');

    const specialities = [
        { name: 'General Physician', icon: Stethoscope },
        { name: 'Cardiologist', icon: Heart },
        { name: 'Dermatologist', icon: Sparkles },
        { name: 'Orthopaedic', icon: Activity },
        { name: 'Paediatrician', icon: User },
        { name: 'Gynaecologist', icon: Flower2 },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <View style={styles.header}>
                <View style={[styles.logoBtn, { backgroundColor: colors.blue }]}>
                    <Typography weight="700" style={{ color: 'white' }}>OT</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 20, color: colors.white, marginLeft: 12 }}>OpenTreatment</Typography>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Typography variant="h1" weight="700" style={{ fontSize: 24, color: colors.white, marginBottom: 8 }}>Clinic & specialisation</Typography>
                <Typography weight="500" style={{ color: colors.text3, marginBottom: 32 }}>Where do you practise? What do you specialise in?</Typography>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>CLINIC / HOSPITAL NAME *</Typography>
                        <TextInput
                            value={clinicName}
                            onChangeText={setClinicName}
                            placeholder="Clinic Name"
                            placeholderTextColor={colors.text3}
                            style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1.5 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>CITY *</Typography>
                            <TextInput
                                value={city}
                                onChangeText={setCity}
                                placeholder="City"
                                placeholderTextColor={colors.text3}
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>PIN CODE</Typography>
                            <TextInput
                                value={pinCode}
                                onChangeText={setPinCode}
                                placeholder="411001"
                                placeholderTextColor={colors.text3}
                                keyboardType="numeric"
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>FULL ADDRESS</Typography>
                        <TextInput
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Address"
                            placeholderTextColor={colors.text3}
                            style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>PRIMARY SPECIALISATION *</Typography>
                        <View style={styles.grid}>
                            {specialities.map((item, i) => {
                                const active = speciality === item.name;
                                const Icon = item.icon;
                                return (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => setSpeciality(item.name)}
                                        style={[
                                            styles.gridItem,
                                            { backgroundColor: 'rgba(17, 24, 39, 0.2)', borderColor: active ? colors.blue : colors.border2 },
                                            active && { backgroundColor: 'rgba(59, 130, 246, 0.05)' }
                                        ]}
                                    >
                                        <Icon size={24} color={active ? colors.blue : colors.text3} />
                                        <Typography weight={active ? "700" : "500"} style={{ color: active ? colors.text : colors.text3, fontSize: 13, textAlign: 'center', marginTop: 8 }}>{item.name}</Typography>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </View>

                <View style={{ height: 160 }} />
            </ScrollView>

            <AuthFooter
                currentStep={4}
                onBack={() => navigation.goBack()}
                onNext={() => navigation.navigate('Main')}
                nextLabel="Set up my dashboard"
                nextIcon={<Check size={18} color="white" />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 60,
        marginBottom: 40,
    },
    logoBtn: {
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContent: {
        paddingHorizontal: 24,
    },
    form: {
        gap: 20,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 10,
        letterSpacing: 0.5,
    },
    input: {
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    gridItem: {
        width: '31%',
        aspectRatio: 1,
        borderRadius: 12,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
});

export default ClinicDetailsScreen;
