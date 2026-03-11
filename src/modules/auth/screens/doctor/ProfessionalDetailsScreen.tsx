import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '../../../../theme/ThemeProvider';
import { Typography } from '../../../../components/Base';
import { ChevronLeft, ChevronDown, User, Phone, Book } from 'lucide-react-native';
import { AuthFooter } from '../../../../components/AuthFooter';

const ProfessionalDetailsScreen = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [firstName, setFirstName] = useState('skks');
    const [lastName, setLastName] = useState('sks');
    const [phone, setPhone] = useState('89220');
    const [gender, setGender] = useState('Female');
    const [regNo, setRegNo] = useState('qmkd');
    const [qualification, setQualification] = useState('MBBS');
    const [gradYear, setGradYear] = useState('2019');
    const [experience, setExperience] = useState('Less than 1 year');

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <View style={styles.header}>
                <View style={[styles.logoBtn, { backgroundColor: colors.blue }]}>
                    <Typography weight="700" style={{ color: 'white' }}>OT</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 20, color: colors.white, marginLeft: 12 }}>OpenTreatment</Typography>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Typography variant="h1" weight="700" style={{ fontSize: 24, color: colors.white, marginBottom: 8 }}>Your professional details</Typography>
                <Typography weight="500" style={{ color: colors.text3, marginBottom: 32 }}>Tell us about your medical background so patients can trust you.</Typography>

                <View style={styles.form}>
                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>FIRST NAME *</Typography>
                            <TextInput
                                value={firstName}
                                onChangeText={setFirstName}
                                placeholder="First Name"
                                placeholderTextColor={colors.text3}
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>LAST NAME *</Typography>
                            <TextInput
                                value={lastName}
                                onChangeText={setLastName}
                                placeholder="Last Name"
                                placeholderTextColor={colors.text3}
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>PHONE NUMBER *</Typography>
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Phone"
                                placeholderTextColor={colors.text3}
                                keyboardType="phone-pad"
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>GENDER</Typography>
                            <TouchableOpacity style={[styles.pickerBtn, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2 }]}>
                                <Typography weight="600" style={{ color: colors.text, flex: 1 }}>{gender}</Typography>
                                <ChevronDown size={18} color={colors.text3} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>MEDICAL REGISTRATION NUMBER *</Typography>
                        <TextInput
                            value={regNo}
                            onChangeText={setRegNo}
                            placeholder="Registration Number"
                            placeholderTextColor={colors.text3}
                            style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1.5 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>HIGHEST QUALIFICATION *</Typography>
                            <TouchableOpacity style={[styles.pickerBtn, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2 }]}>
                                <Typography weight="600" style={{ color: colors.text, flex: 1 }}>{qualification}</Typography>
                                <ChevronDown size={18} color={colors.text3} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>YEAR OF GRADUATION</Typography>
                            <TextInput
                                value={gradYear}
                                onChangeText={setGradYear}
                                placeholder="YYYY"
                                placeholderTextColor={colors.text3}
                                keyboardType="numeric"
                                style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>YEARS OF EXPERIENCE</Typography>
                        <TouchableOpacity style={[styles.pickerBtn, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2 }]}>
                            <Typography weight="600" style={{ color: colors.text, flex: 1 }}>{experience}</Typography>
                            <ChevronDown size={18} color={colors.text3} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 160 }} />
            </ScrollView>

            <AuthFooter
                currentStep={3}
                onBack={() => navigation.goBack()}
                onNext={() => navigation.navigate('ClinicDetails')}
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
    pickerBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
    },
});

export default ProfessionalDetailsScreen;
