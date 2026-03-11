import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { Typography, Card } from '../../../components/Base';
import { Header } from '../../../components/Header';
import { Plus, MoreVertical, Scissors, ShieldAlert } from 'lucide-react-native';

const ServiceRow = ({ name, duration, price, category }: any) => {
    const { colors } = useTheme();
    return (
        <Card style={[styles.serviceCard, { backgroundColor: colors.panel, borderColor: colors.border }] as any}>
            <View style={styles.serviceInfo}>
                <View style={[styles.categoryIcon, { backgroundColor: colors.panel2, borderColor: colors.border }]}>
                    <Scissors size={20} color={colors.blue} />
                </View>
                <View style={{ flex: 1 }}>
                    <Typography weight="700" style={{ fontSize: 16, color: colors.white }}>{name}</Typography>
                    <Typography variant="caption" color={colors.text3}>{category} · {duration} mins</Typography>
                </View>
                <Typography weight="700" style={{ fontSize: 16, color: colors.white }}>₹{price}</Typography>
            </View>
        </Card>
    );
};

const ServicesScreen = () => {
    const { colors } = useTheme();
    const services = [
        { name: 'Initial Consultation', duration: '30', price: '800', category: 'General' },
        { name: 'Follow-up Visit', duration: '15', price: '400', category: 'General' },
        { name: 'X-Ray Review', duration: '20', price: '500', category: 'Diagnostics' },
        { name: 'Minor Procedure', duration: '60', price: '2500', category: 'Surgical' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.navy }]}>
            <Header title="Service List" />

            <View style={styles.headerActions}>
                <Typography weight="600" color={colors.text2}>12 services listed</Typography>
                <TouchableOpacity style={[styles.addBtn, { backgroundColor: colors.blue }]}>
                    <Plus size={18} color="white" />
                    <Typography weight="700" style={{ color: 'white', fontSize: 13 }}>New Service</Typography>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {services.map((s, i) => <ServiceRow key={i} {...s} />)}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    addBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        gap: 8,
    },
    scrollContent: {
        paddingHorizontal: 20,
        gap: 12,
    },
    serviceCard: {
        padding: 16,
    },
    serviceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    categoryIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ServicesScreen;
