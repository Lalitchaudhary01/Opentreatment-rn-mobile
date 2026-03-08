import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../../components/Base';
import { Mail, Lock, Eye, EyeOff, Github } from 'lucide-react-native';
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
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <View style={styles.sidebarGraphic}>
                <View style={[styles.logoBtn, { backgroundColor: colors.blue }]}>
                    <Typography weight="700" style={{ color: 'white' }}>OT</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 20, color: colors.white, marginLeft: 12 }}>OpenTreatment</Typography>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.formHeader}>
                    <Typography variant="h1" weight="700" style={{ fontSize: 28, color: colors.white, marginBottom: 8 }}>Create your account</Typography>
                    <Typography weight="500" style={{ color: colors.text3 }}>Get started free — no credit card required</Typography>
                </View>

                {/* Social Logins */}
                <View style={styles.socialRow}>
                    <TouchableOpacity style={[styles.socialBtn, { borderColor: colors.border2 }]}>
                        <View style={styles.socialIconPlaceholder} />
                        <Typography weight="600" style={{ color: colors.text, fontSize: 15 }}>Continue with Google</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialBtn, { borderColor: colors.border2, marginTop: 12 }]}>
                        <View style={styles.socialIconPlaceholder} />
                        <Typography weight="600" style={{ color: colors.text, fontSize: 15 }}>Continue with Apple</Typography>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}>
                    <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
                    <Typography weight="500" style={{ color: colors.text3, paddingHorizontal: 12, fontSize: 12 }}>or sign up with email</Typography>
                    <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>EMAIL ADDRESS</Typography>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email address"
                            placeholderTextColor={colors.text3}
                            keyboardType="email-address"
                            style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>PASSWORD</Typography>
                        <View style={[styles.passwordContainer, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: passwordError ? '#ef4444' : colors.border2 }]}>
                            <TextInput
                                value={password}
                                onChangeText={handlePasswordChange}
                                placeholder="Create a strong password"
                                placeholderTextColor={colors.text3}
                                secureTextEntry={!showPassword}
                                style={[styles.passwordInput, { color: colors.text }]}
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

                    <View style={styles.inputGroup}>
                        <Typography weight="700" style={[styles.label, { color: colors.text3 }]}>CONFIRM PASSWORD</Typography>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Confirm your password"
                            placeholderTextColor={colors.text3}
                            secureTextEntry={!showPassword}
                            style={[styles.input, { backgroundColor: 'rgba(17, 24, 39, 0.5)', borderColor: colors.border2, color: colors.text }]}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sidebarGraphic: {
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
    formHeader: {
        marginBottom: 32,
    },
    socialRow: {
        marginBottom: 32,
    },
    socialBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        gap: 12,
    },
    socialIconPlaceholder: {
        width: 20,
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 4,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
    },
    form: {
        gap: 24,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 11,
        letterSpacing: 0.5,
    },
    input: {
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 16,
    },
    passwordInput: {
        flex: 1,
        fontSize: 15,
        height: '100%',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
});


export default SignUpScreen;

