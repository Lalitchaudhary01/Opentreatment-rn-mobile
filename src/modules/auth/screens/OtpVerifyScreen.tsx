import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
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
        <View className="flex-1" style={{ backgroundColor: colors.navy }}>
            <View className="mb-10 flex-row items-center px-6 pt-[60px]">
                <View className="h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: colors.blue }}>
                    <Typography weight="700" style={{ color: 'white' }}>OT</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 20, color: colors.white, marginLeft: 12 }}>OpenTreatment</Typography>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }} showsVerticalScrollIndicator={false}>
                <Typography variant="h1" weight="700" style={{ fontSize: 28, color: colors.white, marginBottom: 8 }}>Verify your email</Typography>
                <Typography weight="500" style={{ color: colors.text3, marginBottom: 32 }}>We sent a 6-digit code to your email address. Enter it below to continue.</Typography>

                <TouchableOpacity className="mx-auto flex-row items-center justify-center self-center rounded-xl border px-4 py-2.5" style={{ backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                    <Mail size={16} color={colors.blue} />
                    <Typography weight="600" style={{ color: colors.text, marginLeft: 8 }}>demo@sunriseclinic.in</Typography>
                </TouchableOpacity>

                <Typography weight="500" style={{ color: colors.text3, fontSize: 13, textAlign: 'center', marginTop: 24, marginBottom: 24 }}>
                    Didn't get it? Check spam or <Typography weight="700" color={colors.blue}>change email</Typography>
                </Typography>

                <View className="mb-8 flex-row justify-between gap-2">
                    {otp.map((digit, i) => (
                        <View
                            key={i}
                            style={[
                                { flex: 1, height: 64, borderRadius: 12, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
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
                                style={[{ fontSize: 24, fontWeight: '700', textAlign: 'center', width: '100%' }, { color: colors.white }]}
                            />
                        </View>
                    ))}
                </View>

                {verified && (
                    <View className="mb-6 flex-row items-center justify-center">
                        <CheckCircle2 size={18} color="#14b8a6" />
                        <Typography weight="700" style={{ color: '#14b8a6', marginLeft: 8 }}>Email verified successfully!</Typography>
                    </View>
                )}

                <View className="mb-10 flex-row items-center justify-center">
                    <Typography weight="500" style={{ color: colors.text3 }}>Resend code in </Typography>
                    <Typography weight="700" color={colors.blue}>{timer}s</Typography>
                </View>

                <View className="mt-5 flex-row items-center rounded-xl p-4" style={{ backgroundColor: isDark ? 'rgba(255,165,0,0.05)' : 'rgba(255,165,0,0.1)' }}>
                    <Typography weight="600" style={{ color: '#f59e0b', fontSize: 13, flex: 1 }}>
                        <Typography weight="700">Demo mode:</Typography> Use code 1 2 3 4 5 6 to continue, or click
                    </Typography>
                    <TouchableOpacity
                        onPress={handleAutoFill}
                        className="rounded-lg px-3 py-1.5"
                        style={{ backgroundColor: 'rgba(245,158,11,0.2)' }}
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


export default VerifyEmailScreen;
