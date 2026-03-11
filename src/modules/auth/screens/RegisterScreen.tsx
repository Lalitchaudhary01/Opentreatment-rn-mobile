import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/Base';
import { Eye, EyeOff } from 'lucide-react-native';
import { AuthFooter } from '../../components/AuthFooter';

const SignUpScreen = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('demo@sunriseclinic.in');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (text.length > 0 && text.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleContinue = () => {
        if (password.length >= 6 && password === confirmPassword) {
            navigation.navigate('VerifyEmail');
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('Password must be at least 6 characters');
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
                <View className="mb-8">
                    <Typography variant="h1" weight="700" style={{ fontSize: 28, color: colors.white, marginBottom: 8 }}>Create your account</Typography>
                    <Typography weight="500" style={{ color: colors.text3 }}>Get started free — no credit card required</Typography>
                </View>

                <View className="mb-8">
                    <TouchableOpacity className="h-[52px] flex-row items-center justify-center gap-3 rounded-xl border" style={{ borderColor: colors.border2 }}>
                        <View className="h-5 w-5 rounded bg-[#ccc]" />
                        <Typography weight="600" style={{ color: colors.text, fontSize: 15 }}>Continue with Google</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity className="mt-3 h-[52px] flex-row items-center justify-center gap-3 rounded-xl border" style={{ borderColor: colors.border2 }}>
                        <View className="h-5 w-5 rounded bg-[#ccc]" />
                        <Typography weight="600" style={{ color: colors.text, fontSize: 15 }}>Continue with Apple</Typography>
                    </TouchableOpacity>
                </View>

                <View className="mb-8 flex-row items-center">
                    <View className="h-px flex-1" style={{ backgroundColor: colors.border }} />
                    <View className="rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1">
                        <Typography weight="500" style={{ color: colors.text3, fontSize: 12 }}>or sign up with email</Typography>
                    </View>
                    <View className="h-px flex-1" style={{ backgroundColor: colors.border }} />
                </View>

                <View className="gap-6">
                    <View className="gap-2">
                        <Typography weight="700" style={[{ fontSize: 11, letterSpacing: 0.5 }, { color: colors.text3 }]}>EMAIL ADDRESS</Typography>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email address"
                            placeholderTextColor={colors.text3}
                            keyboardType="email-address"
                            style={[{ height: 52, borderRadius: 12, borderWidth: 1, paddingHorizontal: 16, fontSize: 15 }, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>

                    <View className="gap-2">
                        <Typography weight="700" style={[{ fontSize: 11, letterSpacing: 0.5 }, { color: colors.text3 }]}>PASSWORD</Typography>
                        <View className="h-[52px] flex-row items-center rounded-xl border px-4" style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: passwordError ? '#ef4444' : colors.border2 }}>
                            <TextInput
                                value={password}
                                onChangeText={handlePasswordChange}
                                placeholder="Create a strong password"
                                placeholderTextColor={colors.text3}
                                secureTextEntry={!showPassword}
                                style={[{ flex: 1, fontSize: 15, height: '100%' }, { color: colors.text }]}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff size={20} color={colors.text3} /> : <Eye size={20} color={colors.text3} />}
                            </TouchableOpacity>
                        </View>
                        {passwordError ? (
                            <Typography weight="600" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }}>{passwordError}</Typography>
                        ) : (
                            <Typography variant="caption" color={colors.text3} style={{ marginTop: 4 }}>Enter a password</Typography>
                        )}
                    </View>

                    <View className="gap-2">
                        <Typography weight="700" style={[{ fontSize: 11, letterSpacing: 0.5 }, { color: colors.text3 }]}>CONFIRM PASSWORD</Typography>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Confirm your password"
                            placeholderTextColor={colors.text3}
                            secureTextEntry={!showPassword}
                            style={[{ height: 52, borderRadius: 12, borderWidth: 1, paddingHorizontal: 16, fontSize: 15 }, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>
                </View>

                <View style={{ height: 160 }} />
            </ScrollView>

            <AuthFooter
                currentStep={1}
                onNext={handleContinue}
                showBack={false}
                isNextDisabled={password.length < 6}
            />
        </View>
    );
};


export default SignUpScreen;
