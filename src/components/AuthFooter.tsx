import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Base';
import { ArrowRight, ChevronLeft } from 'lucide-react-native';

interface AuthFooterProps {
    currentStep: number;
    totalSteps?: number;
    onBack?: () => void;
    onNext: () => void;
    nextLabel?: string;
    showBack?: boolean;
    isNextDisabled?: boolean;
    nextIcon?: React.ReactNode;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({
    currentStep,
    totalSteps = 4,
    onBack,
    onNext,
    nextLabel = "Continue",
    showBack = true,
    isNextDisabled = false,
    nextIcon = <ArrowRight size={18} color="white" />
}) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { borderTopColor: colors.border }]}>
            <View style={styles.content}>
                <View style={styles.progressContainer}>
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                { backgroundColor: colors.border2 },
                                i + 1 === currentStep && [styles.activePill, { backgroundColor: colors.blue }],
                                i + 1 < currentStep && { backgroundColor: colors.blue, opacity: 0.5 }
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    {showBack && (
                        <TouchableOpacity
                            onPress={onBack}
                            style={[styles.backBtn, { borderColor: colors.border2 }]}
                        >
                            <ChevronLeft size={18} color={colors.text2} />
                            <Typography weight="600" style={{ color: colors.text2, marginLeft: 4 }}>Back</Typography>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        onPress={onNext}
                        disabled={isNextDisabled}
                        style={[
                            styles.nextBtn,
                            { backgroundColor: colors.blue },
                            isNextDisabled && { opacity: 0.5 }
                        ]}
                    >
                        <Typography weight="700" style={{ color: 'white', marginRight: 8 }}>{nextLabel}</Typography>
                        {nextIcon}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(11, 17, 32, 0.95)',
        borderTopWidth: 1,
        paddingBottom: 40,
        paddingTop: 16,
    },
    content: {
        paddingHorizontal: 24,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 20,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    activePill: {
        width: 24,
        height: 6,
        borderRadius: 3,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 48,
        borderRadius: 12,
        borderWidth: 1,
    },
    nextBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 48,
        borderRadius: 12,
    },
});
