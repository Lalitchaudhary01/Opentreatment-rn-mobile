import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Theme } from '../theme/theme';
import { useTheme } from '../theme/ThemeProvider';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'body' | 'caption' | 'label';
    weight?: '400' | '500' | '600' | '700';
    color?: string;
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body',
    weight = '400',
    color,
    style,
    children
}) => {
    const { colors } = useTheme();

    const getStyle = () => {
        switch (variant) {
            case 'h1': return { fontSize: 24, color: color || colors.text };
            case 'h2': return { fontSize: 20, color: color || colors.text };
            case 'label': return { fontSize: 12, color: color || colors.text3, textTransform: 'uppercase' as any, letterSpacing: 1 };
            case 'caption': return { fontSize: 12, color: color || colors.text2 };
            default: return { fontSize: 15, color: color || colors.text };
        }
    };

    return (
        <Text style={[getStyle(), { fontWeight: weight }, style] as any}>
            {children}
        </Text>
    );
};

export const Card: React.FC<{ children: React.ReactNode, style?: StyleProp<ViewStyle> }> = ({ children, style }) => {
    const { colors } = useTheme();
    return (
        <View style={[
            styles.card,
            { backgroundColor: colors.panel, borderColor: colors.border },
            style
        ] as any}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: Theme.radius.lg,
        borderWidth: 1,
        overflow: 'hidden',
    },
});
