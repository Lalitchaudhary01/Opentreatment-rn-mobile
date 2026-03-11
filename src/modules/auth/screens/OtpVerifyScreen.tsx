import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/Base';
import { Mail, CheckCircle2 } from 'lucide-react-native';
import { AuthFooter } from '../../components/AuthFooter';

const VerifyEmailScreen = ({ navigation }: any) => {
    const { colors, isDark } = useTheme();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [verified, setVerified] = useState(false);
    const [timer, setTimer] = useState(26);

    useEffect(() => {
        if (timer > 0) {
            const t = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(t);
        }
    }, [timer]);

    const handleAutoFill = () => {
        setOtp(['1', '2', '3', '4', '5', '6']);
        setVerified(true);
    };

    const handleOtpChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (newOtp.join('').length === 6) {
            setVerified(true);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <View style={styles.header}>
                <View style={[styles.logoBtn, { backgroundColor: colors.blue }]}>
                    <Typography weight="700" style={{ color: 'white' }}>OT</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 20, color: colors.white, marginLeft: 12 }}>OpenTreatment</Typography>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Typography variant="h1" weight="700" style={{ fontSize: 28, color: colors.white, marginBottom: 8 }}>Verify your email</Typography>
                <Typography weight="500" style={{ color: colors.text3, marginBottom: 32 }}>We sent a 6-digit code to your email address. Enter it below to continue.</Typography>

                <TouchableOpacity style={[styles.emailPill, { backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }]}>
                    <Mail size={16} color={colors.blue} />
                    <Typography weight="600" style={{ color: colors.text, marginLeft: 8 }}>demo@sunriseclinic.in</Typography>
                </TouchableOpacity>

                <Typography weight="500" style={{ color: colors.text3, fontSize: 13, textAlign: 'center', marginTop: 24, marginBottom: 24 }}>
                    Didn't get it? Check spam or <Typography weight="700" color={colors.blue}>change email</Typography>
                </Typography>

                <View style={styles.otpRow}>
                    {otp.map((digit, i) => (
                        <View
                            key={i}
                            style={[
                                styles.otpBox,
                                {
                                    backgroundColor: 'rgba(17, 24, 39, 0.5)',
                                    borderColor: digit ? '#14b8a6' : colors.border2
                                }
                            ]}
                        >
                            <TextInput
                                value={digit}
                                onChangeText={(val) => handleOtpChange(i, val)}
                                keyboardType="numeric"
                                maxLength={1}
                                style={[styles.otpInput, { color: colors.white }]}
                            />
                        </View>
                    ))}
                </View>

                {verified && (
                    <View style={styles.successRow}>
                        <CheckCircle2 size={18} color="#14b8a6" />
                        <Typography weight="700" style={{ color: '#14b8a6', marginLeft: 8 }}>Email verified successfully!</Typography>
                    </View>
                )}

                <View style={styles.resendRow}>
                    <Typography weight="500" style={{ color: colors.text3 }}>Resend code in </Typography>
                    <Typography weight="700" color={colors.blue}>{timer}s</Typography>
                </View>

                <View style={[styles.demoBar, { backgroundColor: isDark ? 'rgba(255,165,0,0.05)' : 'rgba(255,165,0,0.1)' }]}>
                    <Typography weight="600" style={{ color: '#f59e0b', fontSize: 13, flex: 1 }}>
                        <Typography weight="700">Demo mode:</Typography> Use code 1 2 3 4 5 6 to continue, or click
                    </Typography>
                    <TouchableOpacity
                        onPress={handleAutoFill}
                        style={[styles.autoFillBtn, { backgroundColor: 'rgba(245,158,11,0.2)' }]}
                    >
                        <Typography weight="700" style={{ color: '#f59e0b', fontSize: 12 }}>Auto-fill</Typography>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 160 }} />
            </ScrollView>

            <AuthFooter
                currentStep={2}
                onBack={() => navigation.goBack()}
                onNext={() => navigation.navigate('ProfDetails')}
                nextLabel="Verify & Continue"
                nextIcon={<CheckCircle2 size={18} color="white" />}
                isNextDisabled={!verified}
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
    emailPill: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
    },
    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: 32,
    },
    otpBox: {
        flex: 1,
        height: 64,
        borderRadius: 12,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpInput: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        width: '100%',
    },
    successRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    resendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    demoBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        marginTop: 20,
    },
    autoFillBtn: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
});


export default VerifyEmailScreen;
