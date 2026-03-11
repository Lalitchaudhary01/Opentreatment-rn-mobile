import React from 'react';
import { View, StyleSheet, TextInput, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme/theme';
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
        <View style={[styles.field, style]}>
            <Typography weight="600" style={[styles.label, { color: colors.text2 }]}>{label}</Typography>
            <TextInput
                style={[
                    styles.input,
                    multiline && styles.multilineInput,
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

const styles = StyleSheet.create({
    field: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    multilineInput: {
        height: 120,
        paddingTop: 16,
        textAlignVertical: 'top',
    },
});
