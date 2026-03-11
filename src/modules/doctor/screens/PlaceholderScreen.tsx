import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { ShieldAlert } from 'lucide-react-native';

const PlaceholderScreen = ({ route }: any) => {
    const { colors } = useTheme();
    const title = route?.name || "Screen";

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title={title} />
            <View style={styles.content}>
                <View style={[styles.iconBox, { backgroundColor: 'rgba(59,130,246,0.1)' }]}>
                    <ShieldAlert size={48} color={colors.blue} />
                </View>
                <Typography variant="h2" weight="700" color={colors.white}>Under Development</Typography>
                <Typography variant="caption" color={colors.text3} style={{ textAlign: 'center', marginTop: 8 }}>
                    The {title} screen is coming soon in the next update.
                </Typography>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    iconBox: {
        width: 100,
        height: 100,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
});

export default PlaceholderScreen;
