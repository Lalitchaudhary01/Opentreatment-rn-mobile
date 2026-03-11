import React from 'react';
import { View, TextInput, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Typography } from './Base';

interface FormFieldProps {
    label: string;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    multiline?: boolean;
    style?: ViewStyle;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    multiline,
    style
}) => {
    const { colors } = useTheme();
    return (
        <View className="mb-5 w-full" style={style}>
            <Typography weight="600" style={[{ fontSize: 14, marginBottom: 8, marginLeft: 4 }, { color: colors.text2 }]}>{label}</Typography>
            <TextInput
                style={[
                    { height: 56, borderRadius: 16, borderWidth: 1, paddingHorizontal: 16, fontSize: 15 },
                    multiline && { height: 120, paddingTop: 16, textAlignVertical: 'top' },
                    { backgroundColor: colors.panel, borderColor: colors.border, color: colors.text }
                ]}
                placeholder={placeholder}
                placeholderTextColor={colors.text3}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
            />
        </View>
    );
};
