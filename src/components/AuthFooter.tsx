import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
        <View
            className="absolute inset-x-0 bottom-0 border-t bg-slate-950/95 pb-10 pt-4"
            style={{ borderTopColor: colors.border }}
        >
            <View className="px-6">
                <View className="mb-5 flex-row items-center gap-1.5">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <View
                            key={i}
                            style={[
                                { width: 6, height: 6, borderRadius: 3 },
                                { backgroundColor: colors.border2 },
                                i + 1 === currentStep && [{ width: 24, height: 6, borderRadius: 3 }, { backgroundColor: colors.blue }],
                                i + 1 < currentStep && { backgroundColor: colors.blue, opacity: 0.5 }
                            ]}
                        />
                    ))}
                </View>

                <View className="flex-row items-center justify-end gap-3">
                    {showBack && (
                        <TouchableOpacity
                            onPress={onBack}
                            className="h-12 flex-row items-center rounded-xl border px-4"
                            style={{ borderColor: colors.border2 }}
                        >
                            <ChevronLeft size={18} color={colors.text2} />
                            <Typography weight="600" style={{ color: colors.text2, marginLeft: 4 }}>Back</Typography>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        onPress={onNext}
                        disabled={isNextDisabled}
                        style={[
                            { height: 48, borderRadius: 12, paddingHorizontal: 20 },
                            { backgroundColor: colors.blue },
                            isNextDisabled && { opacity: 0.5 }
                        ]}
                        className="flex-row items-center"
                    >
                        <Typography weight="700" style={{ color: 'white', marginRight: 8 }}>{nextLabel}</Typography>
                        {nextIcon}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
